import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { of } from "rxjs";

import { SearchDataService } from "../../../search/services/search-data.service";
import { VideoItem } from "../../models/video.model";
import { VideoDetailsComponent } from "./video-details.component";

describe("VideoDetailsComponent", () => {
    let component: VideoDetailsComponent;
    let fixture: ComponentFixture<VideoDetailsComponent>;
    let mockDataService: jest.Mocked<SearchDataService>;
    let mockActivatedRoute: ActivatedRoute;

    beforeEach(() => {
        mockDataService = {
            searchResults$: jest.fn(),
            videoStatistics$: jest.fn(),
            searchVideos: jest.fn(),
            getVideoById: jest.fn(),
            getVideoStatistics: jest.fn(),
        } as unknown as jest.Mocked<SearchDataService>;

        mockActivatedRoute = {
            snapshot: {
                paramMap: {
                    get: jest.fn().mockReturnValue("123"),
                },
                url: [],
                params: {},
                queryParams: {},
                fragment: "",
                data: {},
                outlet: "",
                component: null,
            },
        } as unknown as ActivatedRoute;

        TestBed.configureTestingModule({
            declarations: [VideoDetailsComponent],
            providers: [
                { provide: SearchDataService, useValue: mockDataService },
                { provide: ActivatedRoute, useValue: mockActivatedRoute },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(VideoDetailsComponent);
        component = fixture.componentInstance;
    });

    it("should create the component", () => {
        expect(component).toBeTruthy();
    });

    it("should retrieve video details on init", () => {
        const mockVideo: VideoItem = {
            kind: "youtube#video",
            etag: "etag1",
            id: "123",
            snippet: {
                publishedAt: "2023-01-01T00:00:00Z",
                channelId: "channel1",
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
                    title: "Localized Title",
                    description: "Localized Description",
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

        mockDataService.getVideoById.mockReturnValue(of(mockVideo));

        component.ngOnInit();

        expect(mockDataService.getVideoById).toHaveBeenCalledWith("123");
        expect(component.video).toEqual(mockVideo);
    });
});
