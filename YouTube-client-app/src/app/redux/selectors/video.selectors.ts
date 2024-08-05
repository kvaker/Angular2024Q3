import { createFeatureSelector, createSelector } from "@ngrx/store";

import { VideoState } from "../reducers/video.reducer";

export const selectVideoState = createFeatureSelector<VideoState>("videos");

export const selectAllVideos = createSelector(
    selectVideoState,
    (state: VideoState) => state.videos,
);

export const selectVideosLoading = createSelector(
    selectVideoState,
    (state: VideoState) => state.loading,
);

export const selectVideosError = createSelector(
    selectVideoState,
    (state: VideoState) => state.error,
);
