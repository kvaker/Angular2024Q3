import { DatePipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { LoginComponent } from "./auth/pages/login/login.component";
import { AuthService } from "./auth/services/auth.service";
import { AuthGuard } from "./core/components/guards/auth.guard";
import { HeaderComponent } from "./core/components/header/header.component";
import { SearchModule } from "./search/search.module";
import { NotFoundPageComponent } from "./youtube/pages/not-found-page/not-found-page.component";

@NgModule({
    declarations: [AppComponent, LoginComponent, HeaderComponent, NotFoundPageComponent],
    imports: [BrowserModule, FormsModule, SearchModule, AppRoutingModule],
    providers: [AuthService, AuthGuard, DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {}
