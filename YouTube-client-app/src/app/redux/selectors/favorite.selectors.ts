import { createFeatureSelector, createSelector } from "@ngrx/store";

import { FavoriteItem } from "../../favorite/models/favorite.model";
import { AppState } from "../state.models";

export const selectFavorites = createFeatureSelector<AppState, FavoriteItem[]>("favorites");

export const selectFavoriteItems = createSelector(
    selectFavorites,
    (favorites: FavoriteItem[]) => favorites,
);
