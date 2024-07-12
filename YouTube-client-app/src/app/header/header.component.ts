import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [CommonModule],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent {
    @Output() sortByChanged = new EventEmitter<string>();
    @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();

    setSortByField(field: string) {
        this.sortByChanged.emit(field);
    }

    onSearch(event: Event) {
        event.preventDefault();
        const input = event.target as HTMLInputElement;
        this.searchTermChanged.emit(input.value);
    }
}
