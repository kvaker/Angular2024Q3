import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { loadFavorites, removeFavorite } from "../../redux/actions/favorite.actions";
import { selectFavoriteItems } from "../../redux/selectors/favorite.selectors";
import { AppState } from "../../redux/state.models";
import { FavoriteItem } from "../models/favorite.model";

@Component({
    selector: "app-favorite",
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
}
