import { Action } from "@ngrx/store";

import { FavoriteItem } from "../../favorite/models/favorite.model";
import { addFavorite, loadFavoritesSuccess, removeFavorite } from "../actions/favorite.actions";
import { favoriteReducer, initialState } from "./favorite.reducer";

describe("FavoriteReducer", () => {
    it("should return the initial state", () => {
        const action = {} as Action;
        const state = favoriteReducer(undefined, action);

        expect(state).toBe(initialState);
    });

    it("should handle addFavorite and add a new favorite item", () => {
        const newItem: FavoriteItem = {
            id: "1",
            title: "New Favorite",
            description: "A new favorite item",
            thumbnailUrl: "http://example.com/image.jpg",
            isFavorite: true,
        };
        const action = addFavorite({ favorite: newItem });
        const expectedState = {
            ...initialState,
            favorites: [...initialState.favorites, newItem],
        };

        const state = favoriteReducer(initialState, action);

        expect(state).toEqual(expectedState);
        expect(state.favorites.length).toBe(1);
        expect(state.favorites).toContain(newItem);
    });

    it("should handle removeFavorite and remove the item from favorites", () => {
        const initialStateWithItems = {
            ...initialState,
            favorites: [
                {
                    id: "1",
                    title: "Test Item",
                    description: "",
                    thumbnailUrl: "",
                    isFavorite: true,
                },
                {
                    id: "2",
                    title: "Another Item",
                    description: "",
                    thumbnailUrl: "",
                    isFavorite: true,
                },
            ],
        };

        const action = removeFavorite({ id: "1" });
        const expectedState = {
            ...initialStateWithItems,
            favorites: initialStateWithItems.favorites.filter((fav) => fav.id !== "1"),
        };

        const state = favoriteReducer(initialStateWithItems, action);

        expect(state).toEqual(expectedState);
        expect(state.favorites.length).toBe(1);
        expect(state.favorites.find((fav) => fav.id === "1")).toBeUndefined();
    });

    it("should handle loadFavoritesSuccess and populate the favorites list", () => {
        const favorites: FavoriteItem[] = [
            {
                id: "1",
                title: "Test Item 1",
                description: "",
                thumbnailUrl: "",
                isFavorite: true,
            },
            {
                id: "2",
                title: "Test Item 2",
                description: "",
                thumbnailUrl: "",
                isFavorite: true,
            },
        ];

        const action = loadFavoritesSuccess({ favorites });
        const expectedState = {
            ...initialState,
            favorites,
        };

        const state = favoriteReducer(initialState, action);

        expect(state).toEqual(expectedState);
        expect(state.favorites.length).toBe(2);
    });
});
