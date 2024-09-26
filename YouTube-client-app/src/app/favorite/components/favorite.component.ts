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

    toggleFavorite(item: FavoriteItem): void {
        if (item.isFavorite) {
            this.store.dispatch(removeFavorite({ id: item.id }));
        } else {
            this.store.dispatch(addFavorite({ favorite: item }));
        }
    }
}
