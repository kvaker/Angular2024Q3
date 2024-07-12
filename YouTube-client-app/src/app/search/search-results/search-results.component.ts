import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { HeaderComponent } from "../../header/header.component";
import { SearchDataService } from "../search-data.service";
import { SearchItemComponent } from "../search-item/search-item.component";
import { SearchResponse } from "../search-response.model";

@Component({
    selector: "app-search-results",
    standalone: true,
    imports: [CommonModule, SearchItemComponent, HeaderComponent],
    templateUrl: "./search-results.component.html",
    styleUrls: ["./search-results.component.scss"],
})
export class SearchResultsComponent implements OnInit {
    searchResults: SearchResponse = {
        kind: "",
        etag: "",
        pageInfo: { totalResults: 0, resultsPerPage: 0 },
        items: [],
    };

    filteredResults = this.searchResults.items;

    constructor(private dataService: SearchDataService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        SearchDataService.getMockSearchResults().subscribe(
            (data: SearchResponse) => {
                this.searchResults = data;
                this.filteredResults = data.items;
                // eslint-disable-next-line no-console
                console.log("Received search results:", this.searchResults);
            },
            (error: unknown) => {
                // eslint-disable-next-line no-console
                console.error("Error fetching search results", error);
            },
        );
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
        this.filteredResults = this.searchResults.items.filter(
            (item) => item.snippet.title.toLowerCase().includes(searchTermLower)
                || item.snippet.description.toLowerCase().includes(searchTermLower),
        );
    }

    // sortSearchResults(): void {
    //   this.searchResults.items.sort((a, b) => {
    //     if (a.snippet.title < b.snippet.title) {
    //       return -1;
    //     }
    //     if (a.snippet.title > b.snippet.title) {
    //       return 1;
    //     }
    //     return 0;
    //   });
    // }
}
