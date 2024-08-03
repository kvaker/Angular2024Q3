import { createAction, props } from '@ngrx/store';

import { VideoItem } from '../../youtube/models/video.model';

export const loadVideos = createAction('[Video] Load Videos');
export const loadVideosSuccess = createAction(
  '[Video] Load Videos Success',
  props<{ videos: VideoItem[] }>(),
);
export const loadVideosFailure = createAction(
  '[Video] Load Videos Failure',
  props<{ error: string }>(),
);
