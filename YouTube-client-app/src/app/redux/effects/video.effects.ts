import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

import { SearchItem } from "../../search/models/search-item.model";
import { SearchResponse } from "../../search/models/search-response.model";
import { SearchDataService } from "../../search/services/search-data.service";
import { VideoItem } from "../../youtube/models/video.model";
import * as VideoActions from "../actions/video.actions";

@Injectable()
export class VideoEffects {
    loadVideos$ = createEffect(() => this.actions$.pipe(
        ofType(VideoActions.loadVideos),
        mergeMap(() => this.searchDataService.searchVideos("your query").pipe(
            map((response: SearchResponse) => {
                const videoItems = response.items.map((item: SearchItem) => {
                    const videoItem: VideoItem = {
                        id: item.id.videoId,
                        snippet: item.snippet,
                        statistics: item.statistics || {}
                    };
                    return videoItem;
                });
                return VideoActions.loadVideosSuccess({ videos: videoItems });
            }),
            catchError((error) => of(VideoActions.loadVideosFailure({ error: error.message })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private searchDataService: SearchDataService
    ) { }
}
