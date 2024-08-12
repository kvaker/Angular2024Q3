import { TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";

import { FavoriteItem } from "../../favorite/models/favorite.model";
import { AppState } from "../state.models";
import { selectFavorites } from "./favorite.selectors";

describe("MyComponent", () => {
    let store: MockStore<AppState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideMockStore({ initialState: { favorites: [], videos: [] } })
            ]
        });

        store = TestBed.inject(Store) as MockStore<AppState>;
    });

    it("should set the favorites state", (done) => {
        const favoriteItem: FavoriteItem = {
            id: "1",
            title: "Test Video",
            description: "This is a test video",
            thumbnailUrl: "http://example.com/image.jpg",
            isFavorite: true,
        };

        store.setState({ favorites: [favoriteItem], videos: [] });

        store.select(selectFavorites).subscribe((favorites) => {
            expect(favorites.length).toBe(1);
            expect(favorites[0].title).toBe("Test Video");
            done();
        });
    });
});
