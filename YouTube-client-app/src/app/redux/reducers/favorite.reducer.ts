import { createReducer, on } from "@ngrx/store";

import { FavoriteItem } from "../../favorite/models/favorite.model";
import * as FavoriteActions from "../actions/favorite.actions";

export interface FavoriteState {
    favorites: FavoriteItem[];
    error: string | null;
}

export const initialState: FavoriteState = {
    favorites: [],
    error: null,
};

export const favoriteReducer = createReducer(
    initialState,
    on(FavoriteActions.addFavorite, (state, { favorite }) => ({
        ...state,
        favorites: [...state.favorites, favorite],
    })),
    on(FavoriteActions.removeFavorite, (state, { id }) => ({
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== id),
    })),
    on(FavoriteActions.loadFavoritesSuccess, (state, { favorites }) => ({
        ...state,
        favorites,
        error: null,
    })),
    on(FavoriteActions.loadFavoritesFailure, (state, { error }) => ({
        ...state,
        error,
    })),
);
