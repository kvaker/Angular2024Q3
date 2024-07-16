import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { HeaderComponent } from "./core/components/header/header.component";
import { SearchModule } from "./search/search.module";
import { NotFoundPageComponent } from "./youtube/pages/not-found-page/not-found-page.component";

@NgModule({
    declarations: [AppComponent, HeaderComponent, NotFoundPageComponent],
    imports: [BrowserModule, SearchModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
