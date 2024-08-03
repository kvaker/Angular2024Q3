import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { LoginComponent } from './auth/pages/login/login.component';
import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './core/components/guards/auth.guard';
import { HeaderComponent } from './core/components/header/header.component';
import { AuthInterceptor } from './interceptors/auth-interceptor/auth-interceptor.component';
import { VideoEffects } from './redux/effects/video.effects';
import { videoReducer } from './redux/reducers/video.reducer';
import { SearchModule } from './search/search.module';
import { AdminComponent } from './youtube/pages/admin/admin.component';
import { NotFoundPageComponent } from './youtube/pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HeaderComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ videos: videoReducer }),
    EffectsModule.forRoot([VideoEffects]),
    LoggerModule.forRoot({ level: NgxLoggerLevel.DEBUG }),
    FormsModule,
    ReactiveFormsModule,
    SearchModule,
    AppRoutingModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    DatePipe,
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
