import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SearchItem } from "../models/search-item.model";
import { SearchItemDirective } from "./search-item.directive";

@Component({
    selector: "app-search-item",
    standalone: true,
    imports: [CommonModule, SearchItemDirective, RouterModule],
    templateUrl: "./search-item.component.html",
    styleUrl: "./search-item.component.scss",
})
export class SearchItemComponent {
    @Input() searchItem: SearchItem | null = null;
}
