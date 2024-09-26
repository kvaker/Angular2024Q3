import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import {
    BehaviorSubject, combineLatest, Observable, of
} from "rxjs";
import {
    catchError, map, shareReplay, switchMap
} from "rxjs/operators";

import { HeaderComponent } from "../../core/components/header/header.component";
import * as CardActions from "../../redux/actions/custom-card.action";
import { selectAllCustomCards } from "../../redux/selectors/custom-card.selectors";
import { CustomCard, SearchItem } from "../models/search-item.model";
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
    customCards$: Observable<CustomCard[]>;
    currentPage$ = new BehaviorSubject<number>(1);
    itemsPerPage: number = 20;
    totalPages: number = 1;

    constructor(
        private dataService: SearchDataService,
        private route: ActivatedRoute,
        private store: Store,
    ) {
        this.customCards$ = this.store.select(selectAllCustomCards);

        function mapCustomCardToSearchItem(customCard: CustomCard): SearchItem {
            return {
                kind: "youtube#searchResult",
                etag: "custom-card-etag",
                id: {
                    kind: "youtube#video",
                    videoId: customCard.id,
                },
                snippet: {
                    publishedAt: customCard.creationDate,
                    channelId: "",
                    title: customCard.title,
                    description: customCard.description,
                    thumbnails: {
                        default: {
                            url: customCard.imageLink,
                            width: 120,
                            height: 90,
                        },
                        medium: {
                            url: customCard.imageLink,
                            width: 320,
                            height: 180,
                        },
                        high: {
                            url: customCard.imageLink,
                            width: 480,
                            height: 360,
                        },
                    },
                    channelTitle: "Custom Channel",
                    tags: [],
                    categoryId: "0",
                    liveBroadcastContent: "none",
                    localized: {
                        title: customCard.title,
                        description: customCard.description,
                    },
                    defaultAudioLanguage: "en",
                },
                statistics: {
                    viewCount: "0",
                    likeCount: "0",
                    dislikeCount: "0",
                    favoriteCount: "0",
                    commentCount: "0",
                },
            };
        }

        this.searchResultsWithStats$ = this.dataService.searchResults$.pipe(
            switchMap((searchResults) => {
                if (!searchResults || !searchResults.items) {
                    return this.customCards$.pipe(
                        map((customCards) => customCards.map(mapCustomCardToSearchItem)),
                    );
                }
                const videoIds = searchResults.items.map((item) => item.id.videoId);
                return this.dataService.getVideoStatistics(videoIds).pipe(
                    map((stats) => {
                        this.totalPages = Math.ceil(searchResults.items.length / this.itemsPerPage);
                        return searchResults.items.map((item, index) => ({
                            ...item,
                            statistics: stats[index]?.statistics,
                        }));
                    }),
                    catchError((error) => {
                        console.error("Error fetching statistics:", error);
                        return of([] as SearchItem[]);
                    }),
                );
            }),
            switchMap((results) => this.customCards$.pipe(
                map((customCards) => results.concat(customCards.map(mapCustomCardToSearchItem))),
            ),),
            shareReplay(1),
        );

        this.paginatedResults$ = combineLatest([this.searchResultsWithStats$, this.currentPage$]).pipe(
            map(([results, currentPage]) => {
                const startIndex = (currentPage - 1) * this.itemsPerPage;
                return results.slice(startIndex, startIndex + this.itemsPerPage);
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
                        (a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime(),
                    );
                } else if (field === "count-of-views") {
                    sortedResults.sort(
                        (a, b) => Number(b.statistics?.viewCount || 0) - Number(a.statistics?.viewCount || 0),
                    );
                } else if (field === "word-or-sentence") {
                    sortedResults.sort((a, b) => a.snippet.title.localeCompare(b.snippet.title));
                }

                this.totalPages = Math.ceil(sortedResults.length / this.itemsPerPage);
                return sortedResults;
            }),
        );

        this.currentPage$.next(1);
        this.updatePaginatedResults();
    }

    onDelete(id: string) {
        this.store.dispatch(CardActions.removeCustomCard({ id }));
    }

    updatePaginatedResults() {
        this.paginatedResults$ = combineLatest([this.searchResultsWithStats$, this.currentPage$]).pipe(
            map(([results, currentPage]) => {
                const startIndex = (currentPage - 1) * this.itemsPerPage;
                return results.slice(startIndex, startIndex + this.itemsPerPage);
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
        this.updatePaginatedResults();
    }

    onSearch(searchTerm: string) {
        this.dataService.searchVideos(searchTerm);
        this.currentPage$.next(1);
    }
}
