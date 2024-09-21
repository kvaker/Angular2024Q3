import { ActionReducerMap } from "@ngrx/store";

import { favoriteReducer, FavoriteState } from "./reducers/favorite.reducer";
import { videoReducer, VideoState } from "./reducers/video.reducer";
import { customCardReducer, CustomCardState } from "./reducers/custom-card.reducer";

export interface AppState {
    favorites: FavoriteState;
    videos: VideoState;
    customCards: CustomCardState;
}

export const appReducers: ActionReducerMap<AppState> = {
    favorites: favoriteReducer,
    videos: videoReducer,
    customCards: customCardReducer,
};
