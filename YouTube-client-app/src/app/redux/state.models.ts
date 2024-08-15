import { ActionReducerMap } from "@ngrx/store";

import { favoriteReducer, FavoriteState } from "./reducers/favorite.reducer";
import { videoReducer, VideoState } from "./reducers/video.reducer";

export interface AppState {
    favorites: FavoriteState;
    videos: VideoState;
}

export const appReducers: ActionReducerMap<AppState> = {
    favorites: favoriteReducer,
    videos: videoReducer,
};
