import { Routes } from "@angular/router";

import { SearchResultsComponent } from "./search/search-results/search-results.component";

export const routes: Routes = [
    { path: "search", component: SearchResultsComponent },
    { path: "", redirectTo: "/search", pathMatch: "full" },
];
