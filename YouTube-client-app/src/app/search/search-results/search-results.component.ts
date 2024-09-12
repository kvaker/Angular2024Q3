import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { combineLatest, Observable, of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";

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
    private originalResults: SearchItem[] = [];
    searchResultsWithStats$: Observable<SearchItem[]>;

    constructor(
        private dataService: SearchDataService,
        private route: ActivatedRoute,
    ) {
        this.searchResultsWithStats$ = this.dataService.searchResults$.pipe(
            switchMap((searchResults) => {
                if (!searchResults || !searchResults.items) {
                    return of([]);
                }
                const videoIds = searchResults.items.map((item) => item.id.videoId);
                return combineLatest([
                    of(searchResults.items),
                    this.dataService.getVideoStatistics(videoIds),
                ]).pipe(
                    map(([items, stats]) => {
                        this.originalResults = [...items];
                        return items.map((item, index) => ({
                            ...item,
                            statistics: stats[index]?.statistics,
                        }));
                    }),
                    catchError((error) => {
                        console.error("Error fetching statistics:", error);
                        return of([]);
                    }),
                );
            }),
        );
    }

    ngOnInit(): void {
        this.dataService.searchVideos("Angular");
    }

    onSortByChanged(field: string) {
        this.searchResultsWithStats$ = this.searchResultsWithStats$.pipe(
            map((results) => {
                const sortedResults = [...results];
                if (field === "date") {
                    sortedResults.sort((a, b) => {
                        if (a.snippet.publishedAt && b.snippet.publishedAt) {
                            return (
                                new Date(a.snippet.publishedAt).getTime()
                - new Date(b.snippet.publishedAt).getTime()
                            );
                        }
                        return 0;
                    });
                } else if (field === "count-of-views") {
                    sortedResults.sort((a, b) => {
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
                } else if (field === "word-or-sentence") {
                    sortedResults.sort((a, b) => a.snippet.title.localeCompare(b.snippet.title));
                }
                return sortedResults;
            }),
        );
    }

    onReset() {
        this.searchResultsWithStats$ = of(
            this.originalResults.map((item) => ({
                ...item,
                statistics: item.statistics,
            })),
        );
    }

    onSearch(searchTerm: string) {
        const searchTermLower = searchTerm.toLowerCase();
        this.searchResultsWithStats$ = this.searchResultsWithStats$.pipe(
            map((results) => results.filter(
                (item) => item.snippet.title.toLowerCase().includes(searchTermLower)
            || item.snippet.description.toLowerCase().includes(searchTermLower),
            ),),
        );
    }
}
