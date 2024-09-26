import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { HeaderComponent } from "../../../core/components/header/header.component";
import { AdminComponent } from "../admin/admin.component";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [CommonModule, HeaderComponent, AdminComponent, HttpClientModule],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
    constructor(private router: Router) {}

    onSearch(searchTerm: string) {
        this.router.navigate(["/search-results"], { queryParams: { q: searchTerm } });
    }
}
