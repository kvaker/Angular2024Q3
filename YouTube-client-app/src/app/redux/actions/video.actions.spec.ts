import { VideoItem } from "../../youtube/models/video.model";
import { loadVideos, loadVideosFailure, loadVideosSuccess } from "./video.actions";

describe("Video Actions", () => {
    it("should create loadVideos action", () => {
        const action = loadVideos();
        expect(action.type).toBe("[Video] Load Videos");
    });

    it("should create loadVideosSuccess action with videos", () => {
        const mockVideos: VideoItem[] = [
            {
                kind: "youtube#video",
                etag: "etag1",
                id: "1",
                snippet: {
                    publishedAt: "2023-01-01T00:00:00Z",
                    channelId: "channel1",
                    title: "Video 1",
                    description: "Description 1",
                    thumbnails: {
                        default: { url: "default1.jpg", width: 120, height: 90 },
                        medium: { url: "medium1.jpg", width: 320, height: 180 },
                        high: { url: "high1.jpg", width: 480, height: 360 },
                    },
                    channelTitle: "Channel 1",
                    tags: ["tag1", "tag2"],
                    categoryId: "1",
                    liveBroadcastContent: "none",
                    localized: {
                        title: "Localized Video 1",
                        description: "Localized Description 1",
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
            },
        ];

        const action = loadVideosSuccess({ videos: mockVideos });
        expect(action.type).toBe("[Video] Load Videos Success");
        expect(action.videos).toEqual(mockVideos);
    });

    it("should create loadVideosFailure action with error message", () => {
        const error = "An error occurred";
        const action = loadVideosFailure({ error });
        expect(action.type).toBe("[Video] Load Videos Failure");
        expect(action.error).toBe(error);
    });
});
