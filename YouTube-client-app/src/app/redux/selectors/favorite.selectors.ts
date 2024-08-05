import { createFeatureSelector, createSelector } from "@ngrx/store";

import { FavoriteState } from "../reducers/favorite.reducer";

export const selectFavoriteState = createFeatureSelector<FavoriteState>("favorites");

export const selectAllFavorites = createSelector(
    selectFavoriteState,
    (state: FavoriteState) => state.favorites
);

export const selectFavoriteError = createSelector(
    selectFavoriteState,
    (state: FavoriteState) => state.error
);
