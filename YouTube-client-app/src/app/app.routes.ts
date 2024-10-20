import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./auth/pages/login/login.component";
import { AuthGuard } from "./core/components/guards/auth.guard";
import { LoginGuard } from "./core/components/guards/login.guard";
import { FavoritePageComponent } from "./favorite/components/favorite.component";
import { SearchResultsComponent } from "./search/search-results/search-results.component";
import { HomeComponent } from "./youtube/pages/home/home.component";
import { NotFoundPageComponent } from "./youtube/pages/not-found-page/not-found-page.component";
import { VideoDetailsComponent } from "./youtube/pages/video-details/video-details.component";

export const routes: Routes = [
    { path: "login", component: LoginComponent, canActivate: [LoginGuard] },
    { path: "", component: HomeComponent, canActivate: [AuthGuard] },
    { path: "search-results", component: SearchResultsComponent, canActivate: [AuthGuard] },
    { path: "video/:id", component: VideoDetailsComponent, canActivate: [AuthGuard] },
    { path: "favorites", component: FavoritePageComponent, canActivate: [AuthGuard] },
    { path: "not-found-page", component: NotFoundPageComponent },
    { path: "**", redirectTo: "/not-found-page" },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
