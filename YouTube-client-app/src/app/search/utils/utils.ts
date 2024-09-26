import { CustomCard, SearchItem } from "../models/search-item.model";

export function mapCustomCardToSearchItem(customCard: CustomCard): SearchItem {
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
