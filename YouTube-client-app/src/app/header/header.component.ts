import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent {
    @Output() sortByChanged = new EventEmitter<string>();
    @Output() searchTermChanged = new EventEmitter<string>();

    setSortByField(field: string) {
        this.sortByChanged.emit(field);
    }

    onSearch(event: Event) {
        const input = event.target as HTMLInputElement;
        this.searchTermChanged.emit(input.value);
    }
}
