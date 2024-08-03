import { createReducer, on } from '@ngrx/store';

import { VideoItem } from '../../youtube/models/video.model';
import { loadVideos, loadVideosFailure, loadVideosSuccess } from '../actions/video.actions';

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
  on(loadVideos, (state) => ({ ...state, loading: true })),
  on(loadVideosSuccess, (state, { videos }) => ({ ...state, loading: false, videos })),
  on(loadVideosFailure, (state, { error }) => ({ ...state, loading: false, error })),
);
