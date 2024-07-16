import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SearchResultsComponent } from "./search/search-results/search-results.component";
import { HomeComponent } from "./youtube/pages/home/home.component";
import { NotFoundPageComponent } from "./youtube/pages/not-found-page/not-found-page.component";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "search-results", component: SearchResultsComponent },
    { path: "not-found-page", component: NotFoundPageComponent },
    { path: "**", redirectTo: "/not-found-page" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
