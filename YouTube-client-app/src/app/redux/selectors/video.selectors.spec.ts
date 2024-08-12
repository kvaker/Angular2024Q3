import { TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { MockStore, provideMockStore } from "@ngrx/store/testing";

import { VideoItem } from "../../youtube/models/video.model";
import { initialState } from "../reducers/video.reducer";
import { AppState } from "../state.models";
import { selectAllVideos, selectVideosError, selectVideosLoading } from "./video.selectors";

describe("Video Selectors", () => {
    let store: MockStore<AppState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideMockStore({ initialState: { videos: initialState, favorites: [] } })],
        });

        store = TestBed.inject(Store) as MockStore<AppState>;
    });

    it("should select all videos from the state", (done) => {
        const videoItem: VideoItem = {
            kind: "youtube#video",
            etag: "etag",
            id: "1",
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

        store.setState({ videos: { ...initialState, videos: [videoItem] }, favorites: [] });

        store.select(selectAllVideos).subscribe((videos) => {
            expect(videos.length).toBe(1);
            expect(videos[0].id).toBe("1");
            expect(videos[0].snippet.title).toBe("Test Video");
            done();
        });
    });

    it("should select loading state from the video state", (done) => {
        store.setState({ videos: { ...initialState, loading: true }, favorites: [] });

        store.select(selectVideosLoading).subscribe((loading) => {
            expect(loading).toBe(true);
            done();
        });
    });

    it("should select error state from the video state", (done) => {
        const errorMessage = "An error occurred";
        store.setState({ videos: { ...initialState, error: errorMessage }, favorites: [] });

        store.select(selectVideosError).subscribe((error) => {
            expect(error).toBe(errorMessage);
            done();
        });
    });
});
