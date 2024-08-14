import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { HeaderComponent } from "../../core/components/header/header.component";
import { SearchItem } from "../models/search-item.model";
import { SearchItemComponent } from "../search-item/search-item.component";
import { SearchDataService } from "../services/search-data.service";

@Component({
    selector: "app-search-results",
    standalone: true,
    imports: [CommonModule, SearchItemComponent, HeaderComponent, HttpClientModule],
    providers: [SearchDataService],
    templateUrl: "./search-results.component.html",
    styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit {
    searchResults$ = this.dataService.searchResults$;
    videoStatistics$ = this.dataService.videoStatistics$;

    filteredResults: SearchItem[] = [];

    constructor(
        private dataService: SearchDataService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.dataService.searchVideos("your query").subscribe(() => {
            this.filteredResults = this.searchResults$() ? this.searchResults$()!.items : [];
            const videoIds = this.filteredResults.map((item) => item.id.videoId);
            this.dataService.getVideoStatistics(videoIds).subscribe(() => {});
        });
    }

    onSortByChanged(field: string) {
        if (field === "date") {
            this.sortByDate();
        } else if (field === "count-of-views") {
            this.sortByViewsCount();
        } else if (field === "word-or-sentence") {
            this.sortByWordOrSentence();
        }
    }

    sortByDate() {
        this.filteredResults.sort((a, b) => {
            if (a.snippet.publishedAt && b.snippet.publishedAt) {
                return (
                    new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime()
                );
            }
            return 0;
        });
    }

    sortByViewsCount() {
        this.filteredResults.sort((a, b) => {
            if (
                a.statistics
        && b.statistics
        && typeof Number(a.statistics.viewCount) === "number"
        && typeof Number(b.statistics.viewCount) === "number"
            ) {
                return Number(b.statistics.viewCount) - Number(a.statistics.viewCount);
            }
            return 0;
        });
    }

    sortByWordOrSentence() {
        this.filteredResults.sort((a, b) => a.snippet.title.localeCompare(b.snippet.title));
    }

    onSearch(searchTerm: string) {
        const searchTermLower = searchTerm.toLowerCase();
        this.filteredResults = this.searchResults$()
            ? this.searchResults$()!.items.filter(
                (item) => item.snippet.title.toLowerCase().includes(searchTermLower)
            || item.snippet.description.toLowerCase().includes(searchTermLower),
            )
            : [];
    }
}
