import { Component, Input } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SearchItem } from "../search-item.model";
import { SearchItemDirective } from "../search-item/search-item.directive";

@Component({
    selector: "app-search-item",
    standalone: true,
    imports: [CommonModule, SearchItemDirective],
    templateUrl: "./search-item.component.html",
    styleUrl: "./search-item.component.scss"
})
export class SearchItemComponent {
    @Input() searchItem: SearchItem | null = null;
}
