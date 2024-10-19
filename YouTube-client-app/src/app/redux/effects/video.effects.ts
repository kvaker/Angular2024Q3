import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { combineLatest, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

import { CustomCard, SearchItem } from "../../search/models/search-item.model";
import { SearchDataService } from "../../search/services/search-data.service";
import * as VideoActions from "../actions/video.actions";
import { selectAllCustomCards } from "../selectors/custom-card.selectors";

@Injectable()
export class VideoEffects {
    loadVideos$ = createEffect(() => this.actions$.pipe(
        ofType(VideoActions.loadVideos),
        switchMap(() => combineLatest([
            this.searchDataService.searchResults$,
            this.store.select(selectAllCustomCards).pipe(catchError(() => of([] as CustomCard[]))),
        ]).pipe(
            map(([response, customCards]) => {
                if (!response || !response.items || !customCards) {
                    return VideoActions.loadVideosFailure({ error: "No data found" });
                }

                const videoItems = response.items.map((item: SearchItem) => ({
                    kind: "youtube#video",
                    etag: item.etag,
                    id: item.id.videoId,
                    snippet: item.snippet,
                    statistics: item.statistics || {
                        viewCount: "0",
                        likeCount: "0",
                        dislikeCount: "0",
                        favoriteCount: "0",
                        commentCount: "0",
                    },
                }));

                const customCardItems = customCards.map((card: CustomCard) => ({
                    kind: "custom#video",
                    etag: "custom-etag",
                    id: card.id,
                    snippet: {
                        publishedAt: card.creationDate,
                        channelId: "custom-channel",
                        title: card.title,
                        description: card.description,
                        thumbnails: {
                            default: {
                                url: card.imageLink,
                                width: 120,
                                height: 90,
                            },
                            medium: {
                                url: card.imageLink,
                                width: 320,
                                height: 180,
                            },
                            high: {
                                url: card.imageLink,
                                width: 480,
                                height: 360,
                            },
                        },
                        channelTitle: "Custom Channel",
                        tags: [],
                        categoryId: "0",
                        liveBroadcastContent: "none",
                        localized: {
                            title: card.title,
                            description: card.description,
                        },
                        defaultAudioLanguage: "en",
                    },
                    statistics: {
                        viewCount: "0",
                        likeCount: "0",
                        dislikeCount: "0",
                        favoriteCount: "0",
                        commentCount: "0",
                    },
                }));

                return VideoActions.loadVideosSuccess({ videos: [...customCardItems, ...videoItems] });
            }),
            catchError((error) => of(VideoActions.loadVideosFailure({ error: error.message }))),
        ),),
    ),);

    constructor(
        private actions$: Actions,
        private searchDataService: SearchDataService,
        private store: Store,
    ) {}
}
