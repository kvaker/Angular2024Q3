import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SearchItemComponent } from "./search-item/search-item.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { SearchDataService } from "./services/search-data.service";

@NgModule({
    declarations: [
        SearchResultsComponent,
        SearchItemComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        SearchDataService
    ]
})
export class SearchModule { }
