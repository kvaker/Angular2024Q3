import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
    BehaviorSubject, combineLatest, Observable, of
} from "rxjs";
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
    paginatedResults$: Observable<SearchItem[]>;

    currentPage$ = new BehaviorSubject<number>(1);
    itemsPerPage: number = 20;
    totalPages: number = 1;

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
                        this.totalPages = Math.ceil(items.length / this.itemsPerPage);
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

        this.paginatedResults$ = combineLatest([this.searchResultsWithStats$, this.currentPage$]).pipe(
            map(([results, currentPage]) => {
                const startIndex = (currentPage - 1) * this.itemsPerPage;
                const paginatedResults = results.slice(startIndex, startIndex + this.itemsPerPage);

                return paginatedResults;
            }),
        );
    }

    ngOnInit(): void {
        this.dataService.searchVideos("");
    }

    goToPage(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage$.next(page);
        }
    }

    nextPage() {
        if (this.currentPage$.value < this.totalPages) {
            this.currentPage$.next(this.currentPage$.value + 1);
        }
    }

    prevPage() {
        if (this.currentPage$.value > 1) {
            this.currentPage$.next(this.currentPage$.value - 1);
        }
    }

    onSortByChanged(field: string) {
        this.searchResultsWithStats$ = this.searchResultsWithStats$.pipe(
            map((results) => {
                const sortedResults = [...results];
                if (field === "date") {
                    sortedResults.sort(
                        (a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime()
                    );
                } else if (field === "count-of-views") {
                    sortedResults.sort(
                        (a, b) => Number(b.statistics?.viewCount || 0) - Number(a.statistics?.viewCount || 0)
                    );
                } else if (field === "word-or-sentence") {
                    sortedResults.sort((a, b) => a.snippet.title.localeCompare(b.snippet.title));
                }
                this.totalPages = Math.ceil(sortedResults.length / this.itemsPerPage);
                return sortedResults;
            })
        );
        this.currentPage$.next(1);
        this.updatePaginatedResults();
    }
    updatePaginatedResults() {
        this.paginatedResults$ = combineLatest([this.searchResultsWithStats$, this.currentPage$]).pipe(
            map(([results, currentPage]) => {
                const startIndex = (currentPage - 1) * this.itemsPerPage;
                return results.slice(startIndex, startIndex + this.itemsPerPage);
            })
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
            map((results) => {
                const filteredResults = results.filter(
                    (item) => item.snippet.title.toLowerCase().includes(searchTermLower)
                  || item.snippet.description.toLowerCase().includes(searchTermLower)
                );
                this.totalPages = Math.ceil(filteredResults.length / this.itemsPerPage);
                this.currentPage$.next(1);
                return filteredResults;
            })
        );
        this.updatePaginatedResults();
    }
}
