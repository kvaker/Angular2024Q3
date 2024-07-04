import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { SearchItemComponent } from "../search-item/search-item.component";
import { SearchResponse } from "../search-response.model";

@Component({
    selector: "app-search-results",
    standalone: true,
    imports: [CommonModule, SearchItemComponent],
    templateUrl: "./search-results.component.html",
    styleUrl: "./search-results.component.scss"
})
export class SearchResultsComponent {
    searchResults: SearchResponse | null = null;
    constructor() {
        this.searchResults = {
            kind: "youtube#videoListResponse",
            etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4\"",
            pageInfo: {
                totalResults: 10,
                resultsPerPage: 10
            },
            items: [
                {
                    kind: "youtube#video",
                    etag: "\"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI\"",
                    id: "YN8zNnV0sK8",
                    snippet: {
                        publishedAt: "2024-06-11T12:42:19.000Z",
                        channelId: "UCg8ss4xW9jASrqWGP30jXiw",
                        title: "Introduction to Angular - Learning Angular",
                        description: "In this series, learn how to build your first Angular application...",
                        thumbnails: {
                            default: {
                                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/default.jpg",
                                width: 120,
                                height: 90
                            },
                            medium: {
                                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/mqdefault.jpg",
                                width: 320,
                                height: 180
                            },
                            high: {
                                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/hqdefault.jpg",
                                width: 480,
                                height: 360
                            },
                            standard: {
                                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/sddefault.jpg",
                                width: 640,
                                height: 480
                            },
                            maxres: {
                                url: "https://i.ytimg.com/vi/xAT0lHYhHMY/maxresdefault.jpg",
                                width: 1280,
                                height: 720
                            }
                        },
                        channelTitle: "Angular",
                        tags: [
                            "angular",
                            "angular 8",
                            "angularjs",
                            "js",
                            "javascript",
                            "rxjs",
                            "angular 60 минут",
                            "angular 1 час",
                            "angular 8 1 час",
                            "владилен минин",
                            "уроки javascript",
                            "angular 2",
                            "angular 4",
                            "angular уроки",
                            "курс angular",
                            "основы angular",
                            "angular фреймворк",
                            "angular уроки для начинающих",
                            "уроки angular",
                            "angular практика",
                            "ангуляр",
                            "angular изучение",
                            "angular курс",
                            "ангуляр 4 уроки",
                            "angular уроки на русском"
                        ],
                        categoryId: "27",
                        liveBroadcastContent: "none",
                        localized: {
                            title: "Introduction to Angular - Learning Angular",
                            description: "In this series, learn how to build your first Angular application..."
                        },
                        defaultAudioLanguage: "en-US"
                    },
                    statistics: {
                        viewCount: "33265",
                        likeCount: "1173",
                        dislikeCount: "26",
                        favoriteCount: "0",
                        commentCount: "170"
                    }
                }
            ]
        };
    }
}
