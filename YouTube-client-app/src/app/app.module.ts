import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { LoginComponent } from "./auth/login/login.component";
import { HeaderComponent } from "./core/components/header/header.component";
import { SearchModule } from "./search/search.module";
import { NotFoundPageComponent } from "./youtube/pages/not-found-page/not-found-page.component";

@NgModule({
    declarations: [AppComponent, LoginComponent, HeaderComponent, NotFoundPageComponent],
    imports: [BrowserModule, FormsModule, SearchModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
