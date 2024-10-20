import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";

import { AuthInterceptor } from "../interceptors/auth-interceptor/auth-interceptor.component";
import { SearchItemComponent } from "./search-item/search-item.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { SearchDataService } from "./services/search-data.service";

@NgModule({
    declarations: [],
    imports: [CommonModule, SearchResultsComponent, SearchItemComponent, HttpClientModule],
    providers: [
        SearchDataService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
})
export class SearchModule {}
