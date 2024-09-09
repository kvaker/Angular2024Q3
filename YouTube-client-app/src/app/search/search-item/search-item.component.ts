import { Component, Input } from "@angular/core";

import { SearchItem } from "../search-item.model";

@Component({
    selector: "app-search-item",
    standalone: true,
    imports: [],
    templateUrl: "./search-item.component.html",
    styleUrl: "./search-item.component.scss"
})
export class SearchItemComponent {
    @Input() searchItem: SearchItem | null = null;
}
