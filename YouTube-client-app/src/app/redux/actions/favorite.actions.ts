import { createAction, props } from "@ngrx/store";

import { FavoriteItem } from "../../favorite/models/favorite.model";

export const addFavorite = createAction(
    "[Favorite] Add Favorite",
    props<{ favorite: FavoriteItem }>(),
);
export const removeFavorite = createAction("[Favorite] Remove Favorite", props<{ id: string }>());
export const loadFavorites = createAction("[Favorite] Load Favorites");
export const loadFavoritesSuccess = createAction(
    "[Favorite] Load Favorites Success",
    props<{ favorites: FavoriteItem[] }>(),
);
export const loadFavoritesFailure = createAction(
    "[Favorite] Load Favorites Failure",
    props<{ error: string }>(),
);
