import { DatePipe } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { LoginComponent } from "./auth/pages/login/login.component";
import { AuthService } from "./auth/services/auth.service";
import { AuthGuard } from "./core/components/guards/auth.guard";
import { HeaderComponent } from "./core/components/header/header.component";
import { FavoritePageComponent } from "./favorite/components/favorite.component";
import { AuthInterceptor } from "./interceptors/auth-interceptor/auth-interceptor.component";
import { VideoEffects } from "./redux/effects/video.effects";
import { customCardReducer } from "./redux/reducers/custom-card.reducer";
import { favoriteReducer } from "./redux/reducers/favorite.reducer";
import { videoReducer } from "./redux/reducers/video.reducer";
import { AppStoreModule } from "./redux/store.module";
import { SearchDataService } from "./search/services/search-data.service";
import { AdminComponent } from "./youtube/pages/admin/admin.component";
import { NotFoundPageComponent } from "./youtube/pages/not-found-page/not-found-page.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        AdminComponent,
        HeaderComponent,
        NotFoundPageComponent,
        FavoritePageComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppStoreModule,
        EffectsModule.forRoot([VideoEffects]),
        StoreDevtoolsModule.instrument({ maxAge: 25 }),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({ favorites: favoriteReducer, customCards: customCardReducer, videos: videoReducer }),
        AppRoutingModule,
    ],
    providers: [
        AuthService,
        AuthGuard,
        DatePipe,
        SearchDataService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
