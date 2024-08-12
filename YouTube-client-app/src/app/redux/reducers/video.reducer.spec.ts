import { Action } from "@ngrx/store";

import { VideoItem } from "../../youtube/models/video.model";
import { loadVideos, loadVideosFailure, loadVideosSuccess } from "../actions/video.actions";
import { initialState, videoReducer } from "./video.reducer";

describe("VideoReducer", () => {
    it("should return the initial state", () => {
        const action = {} as Action;
        const state = videoReducer(undefined, action);

        expect(state).toBe(initialState);
    });

    it("should handle loadVideos and set loading to true", () => {
        const action = loadVideos();
        const expectedState = {
            ...initialState,
            loading: true,
        };

        const state = videoReducer(initialState, action);

        expect(state).toEqual(expectedState);
        expect(state.loading).toBe(true);
    });

    it("should handle loadVideosSuccess and populate the videos list", () => {
        const videos: VideoItem[] = [
            {
                kind: "youtube#video",
                etag: "etag1",
                id: "1",
                snippet: {
                    publishedAt: "2023-01-01T00:00:00Z",
                    channelId: "channel1",
                    title: "Video 1",
                    description: "Description 1",
                    thumbnails: {
                        default: { url: "default1.jpg", width: 120, height: 90 },
                        medium: { url: "medium1.jpg", width: 320, height: 180 },
                        high: { url: "high1.jpg", width: 480, height: 360 },
                    },
                    channelTitle: "Channel 1",
                    tags: ["tag1", "tag2"],
                    categoryId: "1",
                    liveBroadcastContent: "none",
                    localized: {
                        title: "Localized Video 1",
                        description: "Localized Description 1",
                    },
                    defaultAudioLanguage: "en",
                },
                statistics: {
                    viewCount: "1000",
                    likeCount: "100",
                    dislikeCount: "10",
                    favoriteCount: "5",
                    commentCount: "20",
                },
            },
        ];

        const action = loadVideosSuccess({ videos });
        const expectedState = {
            ...initialState,
            loading: false,
            videos,
        };

        const state = videoReducer(initialState, action);

        expect(state).toEqual(expectedState);
        expect(state.videos.length).toBe(1);
        expect(state.videos).toEqual(videos);
    });

    it("should handle loadVideosFailure and set error message", () => {
        const error = "An error occurred";
        const action = loadVideosFailure({ error });
        const expectedState = {
            ...initialState,
            loading: false,
            error,
        };

        const state = videoReducer(initialState, action);

        expect(state).toEqual(expectedState);
        expect(state.error).toBe(error);
    });
});
