import { FavoriteItem } from "../../favorite/models/favorite.model";
import {
    addFavorite,
    loadFavorites,
    loadFavoritesFailure,
    loadFavoritesSuccess,
    removeFavorite,
} from "./favorite.actions";

describe("Favorite Actions", () => {
    it("should create addFavorite action with favorite item", () => {
        const mockFavorite: FavoriteItem = {
            id: "1",
            title: "New Favorite",
            description: "A new favorite item",
            thumbnailUrl: "http://example.com/image.jpg",
            isFavorite: true,
        };

        const action = addFavorite({ favorite: mockFavorite });
        expect(action.type).toBe("[Favorite] Add Favorite");
        expect(action.favorite).toEqual(mockFavorite);
    });

    it("should create removeFavorite action with id", () => {
        const action = removeFavorite({ id: "1" });
        expect(action.type).toBe("[Favorite] Remove Favorite");
        expect(action.id).toBe("1");
    });

    it("should create loadFavorites action", () => {
        const action = loadFavorites();
        expect(action.type).toBe("[Favorite] Load Favorites");
    });

    it("should create loadFavoritesSuccess action with favorites", () => {
        const mockFavorites: FavoriteItem[] = [
            {
                id: "1",
                title: "Favorite Item 1",
                description: "Description 1",
                thumbnailUrl: "http://example.com/image1.jpg",
                isFavorite: true,
            },
            {
                id: "2",
                title: "Favorite Item 2",
                description: "Description 2",
                thumbnailUrl: "http://example.com/image2.jpg",
                isFavorite: true,
            },
        ];

        const action = loadFavoritesSuccess({ favorites: mockFavorites });
        expect(action.type).toBe("[Favorite] Load Favorites Success");
        expect(action.favorites).toEqual(mockFavorites);
    });

    it("should create loadFavoritesFailure action with error message", () => {
        const error = "An error occurred";
        const action = loadFavoritesFailure({ error });
        expect(action.type).toBe("[Favorite] Load Favorites Failure");
        expect(action.error).toBe(error);
    });
});
