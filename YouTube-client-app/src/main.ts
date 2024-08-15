import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import { provideStore } from "@ngrx/store";

import { AppComponent } from "./app/app.component";
import { routes } from "./app/app.routes";
import { appReducers } from "./app/redux/state.models";

bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes, withComponentInputBinding()),
        provideStore(appReducers),
    ],
})
// eslint-disable-next-line no-console
    .catch((err) => console.error(err));
