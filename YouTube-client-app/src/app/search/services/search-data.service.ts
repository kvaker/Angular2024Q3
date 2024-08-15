import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { VideoItem } from "../../youtube/models/video.model";
import { SearchResponse } from "../models/search-response.model";

@Injectable({ providedIn: "root" })
export class SearchDataService {
    private apiKey: string = "AIzaSyAqZjXqcfBBRBx6wMwX942ExP75KnMelZk";
    private searchUrl: string = "https://www.googleapis.com/youtube/v3/search";
    private statsUrl: string = "https://www.googleapis.com/youtube/v3/videos";

    searchResults$ = signal<SearchResponse | null>(null);
    videoStatistics$ = signal<VideoItem[]>([]);

    constructor(private http: HttpClient) {}

    searchVideos(query: string): Observable<SearchResponse> {
        return this.http.get<SearchResponse>(`${this.searchUrl}?q=${query}&key=${this.apiKey}`).pipe(
            map((response) => {
                this.searchResults$.set(response);
                return response;
            }),
        );
    }

    getVideoStatistics(videoIds: string[]): Observable<VideoItem[]> {
        return this.http
            .get<{
            items: VideoItem[];
        }>(`${this.statsUrl}?id=${videoIds.join(",")}&key=${this.apiKey}&part=snippet,statistics`)
            .pipe(
                map((response) => {
                    this.videoStatistics$.set(response.items);
                    return response.items;
                }),
            );
    }

    getVideoById(videoId: string): Observable<VideoItem> {
        const params = new HttpParams()
            .set("key", this.apiKey)
            .set("part", "snippet,statistics")
            .set("id", videoId);
        return this.http
            .get<{ items: VideoItem[] }>(this.statsUrl, { params })
            .pipe(map((response) => response.items[0]));
    }
}
