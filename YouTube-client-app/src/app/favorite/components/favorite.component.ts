import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { HeaderComponent } from "../../core/components/header/header.component";
import { addFavorite, loadFavorites, removeFavorite } from "../../redux/actions/favorite.actions";
import { selectFavoriteItems } from "../../redux/selectors/favorite.selectors";
import { AppState } from "../../redux/state.models";
import { CardComponent } from "../../shared/components/card/card.component";
import { FavoriteItem } from "../models/favorite.model";

@Component({
    selector: "app-favorite",
    standalone: true,
    imports: [CommonModule, CardComponent, HeaderComponent],
    templateUrl: "./favorite.component.html",
    styleUrls: ["./favorite.component.scss"],
})
export class FavoritePageComponent implements OnInit {
    favorites$: Observable<FavoriteItem[]>;

    constructor(private store: Store<AppState>) {
        this.favorites$ = this.store.select(selectFavoriteItems);
    }

    ngOnInit(): void {
        this.store.dispatch(loadFavorites());
    }

    removeFavorite(id: string): void {
        this.store.dispatch(removeFavorite({ id }));
    }

    toggleFavorite(id: string): void {
        const isFavorite = FavoritePageComponent.isFavorite();
        if (isFavorite) {
            this.store.dispatch(removeFavorite({ id }));
        } else {
            const favoriteItem: FavoriteItem = FavoritePageComponent.getFavoriteItemById(id);
            this.store.dispatch(addFavorite({ favorite: favoriteItem }));
        }
    }

    private static isFavorite(): boolean {
        return false;
    }
    private static getFavoriteItemById(id: string): FavoriteItem {
        return {
            id,
            title: "Sample Title",
            description: "Sample Description",
            thumbnailUrl: "sample-url",
            isFavorite: false,
        } as FavoriteItem;
    }
}
