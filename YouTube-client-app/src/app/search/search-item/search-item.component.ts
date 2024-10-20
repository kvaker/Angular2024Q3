import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";

import { FavoriteItem } from "../../favorite/models/favorite.model";
import { addFavorite, removeFavorite } from "../../redux/actions/favorite.actions";
import { selectFavorites } from "../../redux/selectors/favorite.selectors";
import { AppState } from "../../redux/state.models";
import { CardComponent } from "../../shared/components/card/card.component";
import { SearchItemDirective } from "../directives/search-item.directive";
import { SearchItem } from "../models/search-item.model";

@Component({
    selector: "app-search-item",
    standalone: true,
    imports: [CommonModule, CardComponent, SearchItemDirective, RouterModule],
    templateUrl: "./search-item.component.html",
    styleUrls: ["./search-item.component.scss"],
})
export class SearchItemComponent implements OnInit {
    @Input() searchItem: SearchItem | null = null;
    isFavorite: boolean = false;

    constructor(private store: Store<AppState>) {}

    ngOnInit(): void {
        if (this.searchItem) {
            this.store
                .select(selectFavorites)
                .pipe(
                    map(
                        (favorites) => Array.isArray(favorites)
              && favorites.some((favorite) => favorite.id === this.searchItem!.id.videoId),
                    ),
                )
                .subscribe((isFavorite) => {
                    this.isFavorite = isFavorite;
                });
        } else {
            console.warn("searchItem is null or undefined");
        }
    }

    toggleFavorite(video: SearchItem): void {
        if (!video) return;
        const favoriteItem: FavoriteItem = {
            id: video.id.videoId,
            title: video.snippet.title || "Untitled",
            description: video.snippet.description || "No description available",
            thumbnailUrl: video.snippet.thumbnails?.default?.url || "",
            isFavorite: !this.isFavorite,
        };

        if (this.isFavorite) {
            this.store.dispatch(removeFavorite({ id: video.id.videoId }));
        } else {
            this.store.dispatch(addFavorite({ favorite: favoriteItem }));
        }
        this.isFavorite = !this.isFavorite;
    }
}
