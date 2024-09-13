import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

import { VideoItem } from "../../youtube/models/video.model";
import { SearchResponse } from "../models/search-response.model";

@Injectable({ providedIn: "root" })
export class SearchDataService {
    private apiKey: string = "AIzaSyDEsqmNiF2KGYDl-I5cHiXF1Nn6bMu6FaM";
    private searchUrl: string = "https://www.googleapis.com/youtube/v3/search";
    private statsUrl: string = "https://www.googleapis.com/youtube/v3/videos";

    private searchResultsSubject = new BehaviorSubject<SearchResponse | null>(null);
    searchResults$ = this.searchResultsSubject.asObservable();

    private videoStatisticsSubject = new BehaviorSubject<VideoItem[]>([]);
    videoStatistics$ = this.videoStatisticsSubject.asObservable();

    constructor(private http: HttpClient) {}

    searchVideos(query: string): void {
        const params = new HttpParams()
            .set("key", this.apiKey)
            .set("q", query)
            .set("part", "snippet")
            .set("type", "video")
            .set("maxResults", "500");

        this.http
            .get<SearchResponse>(this.searchUrl, { params })
            .pipe(
                map((response) => {
                    this.searchResultsSubject.next(response);
                    return response;
                }),
            )
            .subscribe();
    }

    getVideoStatistics(videoIds: string[]): Observable<VideoItem[]> {
        const params = new HttpParams()
            .set("key", this.apiKey)
            .set("id", videoIds.join(","))
            .set("part", "snippet,statistics");

        return this.http.get<{ items: VideoItem[] }>(this.statsUrl, { params }).pipe(
            map((response) => {
                this.videoStatisticsSubject.next(response.items);
                return response.items;
            }),
        );
    }

    getVideoById(videoId: string): Observable<VideoItem | null> {
        const params = new HttpParams()
            .set("key", this.apiKey)
            .set("part", "snippet,statistics")
            .set("id", videoId);

        return this.http.get<{ items: VideoItem[] }>(this.statsUrl, { params }).pipe(
            map((response) => {
                const videoItem = response.items.length ? response.items[0] : null;
                return videoItem;
            }),
        );
    }
}
