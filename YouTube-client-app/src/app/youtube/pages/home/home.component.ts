import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { HeaderComponent } from "../../../core/components/header/header.component";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [CommonModule, HeaderComponent],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent {
    constructor(private router: Router) {}

    onSearch(searchTerm: string) {
        this.router.navigate(["/search-results"], { queryParams: { q: searchTerm } });
    }
}
