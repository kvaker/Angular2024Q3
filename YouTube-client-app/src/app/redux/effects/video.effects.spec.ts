import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { Marbles, marbles } from "jest-marbles";
import { Observable } from "rxjs";

import { SearchDataService } from "../../search/services/search-data.service";
import { VideoItem } from "../../youtube/models/video.model";
import * as VideoActions from "../actions/video.actions";
import { VideoEffects } from "./video.effects";

describe("VideoEffects", () => {
    let actions$: Observable<unknown>;
    let effects: VideoEffects;
    let searchDataService: jest.Mocked<SearchDataService>;

    const mockVideoItem: VideoItem = {
        kind: "youtube#video",
        etag: "etag",
        id: "123",
        snippet: {
            publishedAt: "2023-01-01T00:00:00Z",
            channelId: "test-channel-id",
            title: "Test Video",
            description: "Test Description",
            thumbnails: {
                default: { url: "default.jpg", width: 120, height: 90 },
                medium: { url: "medium.jpg", width: 320, height: 180 },
                high: { url: "high.jpg", width: 480, height: 360 },
            },
            channelTitle: "Test Channel",
            tags: ["tag1", "tag2"],
            categoryId: "1",
            liveBroadcastContent: "none",
            localized: {
                title: "Тестовое видео",
                description: "Тестовое описание",
            },
            defaultAudioLanguage: "en",
        },
        statistics: {
            viewCount: "1000",
            likeCount: "100",
            dislikeCount: "10",
            favoriteCount: "5",
            commentCount: "20",
        },
    };

    beforeEach(() => {
        const spy = {
            searchVideos: jest.fn(),
        };

        TestBed.configureTestingModule({
            providers: [
                VideoEffects,
                provideMockActions(() => actions$),
                provideMockStore({ initialState: { favorites: [], videos: [] } }),
                { provide: SearchDataService, useValue: spy },
            ],
        });

        effects = TestBed.inject(VideoEffects);
        searchDataService = TestBed.inject(SearchDataService) as jest.Mocked<SearchDataService>;
    });

    it("should create the effects", () => {
        expect(effects).toBeTruthy();
    });

    it(
        "should return loadVideosSuccess action with video items on success",
        marbles((m: Marbles) => {
            const action = VideoActions.loadVideos();
            const completion = VideoActions.loadVideosSuccess({
                videos: [mockVideoItem],
            });

            actions$ = m.hot("-a-", { a: action });
            const response = m.cold("-b|", { b: { items: [mockVideoItem] } });
            const expected = m.cold("--c", { c: completion });

            searchDataService.searchVideos.mockReturnValue(response);

            m.expect(effects.loadVideos$).toBeObservable(expected);
        }),
    );

    it(
        "should return loadVideosFailure action on error",
        marbles((m: Marbles) => {
            const action = VideoActions.loadVideos();
            const error = new Error("An error occurred");
            const completion = VideoActions.loadVideosFailure({ error: error.message });

            actions$ = m.hot("-a-", { a: action });
            const response = m.cold("-#", {}, error);
            const expected = m.cold("--c", { c: completion });

            searchDataService.searchVideos.mockReturnValue(response);

            m.expect(effects.loadVideos$).toBeObservable(expected);
        }),
    );
});
