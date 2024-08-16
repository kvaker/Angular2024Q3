import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { VideoItem } from "../../youtube/models/video.model";
import { SearchResponse } from "../models/search-response.model";

@Injectable({ providedIn: "root" })
export class SearchDataService {
    private apiKey: string = "AIzaSyDiks_w8BziWYH2XYJ-WYZsLuAMmxfx1pc";
    private searchUrl: string = "https://www.googleapis.com/youtube/v3/search";
    private statsUrl: string = "https://www.googleapis.com/youtube/v3/videos";

    searchResults$ = signal<SearchResponse | null>(null);
    videoStatistics$ = signal<VideoItem[]>([]);

    constructor(private http: HttpClient) {}

    searchVideos(query: string): Observable<SearchResponse> {
        const params = new HttpParams()
            .set("key", this.apiKey)
            .set("q", query)
            .set("part", "snippet")
            .set("type", "video")
            .set("maxResults", "10");

        return this.http.get<SearchResponse>(this.searchUrl, { params }).pipe(
            map((response) => {
                /* eslint-disable no-console */
                console.log("Search Response:", response);
                this.searchResults$.set(response);
                return response;
            })
        );
    }

    getVideoStatistics(videoIds: string[]): Observable<VideoItem[]> {
        const params = new HttpParams()
            .set("key", this.apiKey)
            .set("id", videoIds.join(","))
            .set("part", "snippet,statistics");

        return this.http.get<{ items: VideoItem[] }>(this.statsUrl, { params })
            .pipe(map((response) => {
                this.videoStatistics$.set(response.items);
                return response.items;
            }));
    }

    getVideoById(videoId: string): Observable<VideoItem | null> {
        const params = new HttpParams()
            .set("key", this.apiKey)
            .set("part", "snippet,statistics")
            .set("id", videoId);

        return this.http
            .get<{ items: VideoItem[] }>(this.statsUrl, { params })
            .pipe(
                map((response) => {
                    const videoItem = response.items.length ? response.items[0] : null;
                    console.log("Video Stats Response:", videoItem);
                    return videoItem;
                })
            );
    }
}
