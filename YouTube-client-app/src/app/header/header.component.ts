import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss"
})
export class HeaderComponent {
  @Output() sortByChanged: EventEmitter<string> = new EventEmitter<string>();

  setSortByField(field: string) {
      this.sortByChanged.emit(field);
  }
}
