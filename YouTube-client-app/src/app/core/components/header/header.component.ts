import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";

import { AuthService } from "../../../auth/services/auth.service";

@Component({
    selector: "app-header",
    standalone: true,
    imports: [CommonModule ],
    templateUrl: "./header.component.html",
    styleUrl: "./header.component.scss",
})
export class HeaderComponent {

  constructor(private authService: AuthService) {}

    @Output() sortByChanged = new EventEmitter<string>();
    @Output() searchTermChanged: EventEmitter<string> = new EventEmitter<string>();
    showBottomHeader: boolean = false;

    toggleHeaderBottom() {
        this.showBottomHeader = !this.showBottomHeader;
    }

    setSortByField(field: string) {
        this.sortByChanged.emit(field);
    }

    onSearch(event: Event) {
        event.preventDefault();
        const input = event.target as HTMLInputElement;
        this.searchTermChanged.emit(input.value);
    }
    logout() {
      this.authService.logout();
  }
}
