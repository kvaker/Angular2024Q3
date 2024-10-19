import { SearchItem } from "./search-item.model";

export interface SearchResponse {
    kind: string;
    etag: string;
    pageInfo: { totalResults: number; resultsPerPage: number };
    items: SearchItem[];
}

export interface PageInfo {
    totalResults: number;
    resultsPerPage: number;
}

export interface SearchItemId {
    kind: string;
    videoId: string;
}

export interface SearchItemSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    liveBroadcastContent: string;
}
export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    tags?: string[];
}

export interface Thumbnails {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard?: Thumbnail;
    maxres?: Thumbnail;
}

export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

export interface Localized {
    title: string;
    description: string;
}

export interface Statistics {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
    favoriteCount: string;
    commentCount: string;
}
