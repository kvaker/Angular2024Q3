import { CommonModule } from "@angular/common";
import {
    Component, EventEmitter, Input, Output
} from "@angular/core";

import { FavoriteItem } from "../../../favorite/models/favorite.model";

@Component({
    selector: "app-card",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.scss"],
})
export class CardComponent {
    @Input() favorite!: FavoriteItem;
    @Output() toggleFavorite = new EventEmitter<FavoriteItem>();

    onToggleFavorite(): void {
        this.toggleFavorite.emit(this.favorite);
    }
    get isFavorite(): boolean {
        return this.favorite.isFavorite;
    }
}
