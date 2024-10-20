import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CustomCard, SearchItem } from "../../search/models/search-item.model";
import { VideoItem } from "../../youtube/models/video.model";
import { CustomCardState } from "../reducers/custom-card.reducer";
import { VideoState } from "../reducers/video.reducer";

export const selectVideoState = createFeatureSelector<VideoState>("videos");
export const selectCustomCardState = createFeatureSelector<CustomCardState>("customCards");

export const selectAllVideos = createSelector(selectVideoState, (state: VideoState) => state.videos);

export const selectAllCustomCards = createSelector(
    selectCustomCardState,
    (state: CustomCardState) => state.customCards,
);

export const selectVideosLoading = createSelector(selectVideoState, (state: VideoState) => state.loading);

export const selectVideosError = createSelector(selectVideoState, (state: VideoState) => state.error);

export const selectVideosWithCustomCards = createSelector(
    selectAllVideos,
    selectAllCustomCards,
    (videos: VideoItem[], customCards): SearchItem[] => {
        const customCardItems: SearchItem[] = customCards.map((card: CustomCard) => ({
            kind: "custom#video",
            etag: "custom-card-etag",
            id: {
                kind: "custom#video",
                videoId: card.id,
            },
            snippet: {
                publishedAt: card.creationDate,
                channelId: "",
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
                tags: card.tags,
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

        const videoItems: SearchItem[] = videos.map((video: VideoItem) => ({
            kind: video.kind,
            etag: video.etag,
            id: {
                kind: "youtube#video",
                videoId: video.id,
            },
            snippet: video.snippet,
            statistics: video.statistics,
        }));

        const combinedItems = [...videoItems, ...customCardItems];
        return combinedItems;
    },
);
