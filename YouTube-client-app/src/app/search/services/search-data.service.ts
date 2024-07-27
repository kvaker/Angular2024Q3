import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { VideoItem } from "../../youtube/models/video.model";
import { SearchResponse } from "../models/search-response.model";

@Injectable({
    providedIn: "root",
})
export class SearchDataService {
    private apiKey: string = "AIzaSyCnl3dLz1J0Zip7eZQFWr2MaX9v2JVEaok";
    private searchUrl: string = "https://www.googleapis.com/youtube/v3/search";
    private statsUrl: string = "https://www.googleapis.com/youtube/v3/videos";

    constructor(private http: HttpClient) {}

    searchVideos(query: string): Observable<SearchResponse> {
        return this.http.get<SearchResponse>(`${this.searchUrl}${query}`);
    }

    getVideoStatistics(videoIds: string[]): Observable<VideoItem[]> {
        return this.http.get<{ items: VideoItem[] }>(`${this.statsUrl}${videoIds.join(",")}`)
            .pipe(map((response) => response.items));
    }

    getVideoById(videoId: string): Observable<VideoItem> {
        const params = new HttpParams()
            .set("key", this.apiKey)
            .set("part", "snippet,statistics")
            .set("id", videoId);
        return this.http.get<{ items: VideoItem[] }>(this.statsUrl, { params }).pipe(
            map((response) => response.items[0])
        );
    }
}
