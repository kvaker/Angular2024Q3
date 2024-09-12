import { createFeatureSelector, createSelector } from "@ngrx/store";

import { FavoriteItem } from "../../favorite/models/favorite.model";
import { FavoriteState } from "../reducers/favorite.reducer";
import { AppState } from "../state.models";

export const selectFavorites = createFeatureSelector<AppState, FavoriteItem[]>("favorites");

export const selectFavoritesState = createFeatureSelector<AppState, FavoriteState>("favorites");

export const selectFavoriteItems = createSelector(
    selectFavoritesState,
    (state: FavoriteState) => state.favorites
);

export const selectFavoriteError = createSelector(
    selectFavoritesState,
    (state: FavoriteState) => state.error
);
