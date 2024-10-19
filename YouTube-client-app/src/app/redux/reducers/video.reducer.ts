import { createReducer, on } from "@ngrx/store";

import { VideoItem } from "../../youtube/models/video.model";
import * as VideoActions from "../actions/video.actions";

export interface VideoState {
    videos: VideoItem[];
    loading: boolean;
    error: string | null;
}

export const initialState: VideoState = {
    videos: [],
    loading: false,
    error: null,
};

export const videoReducer = createReducer(
    initialState,
    on(VideoActions.loadVideos, (state) => ({ ...state, loading: true, error: null })),
    on(VideoActions.loadVideosSuccess, (state, { videos }) => ({
        ...state,
        videos,
        loading: false,
    })),
    on(VideoActions.loadVideosFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),
);
