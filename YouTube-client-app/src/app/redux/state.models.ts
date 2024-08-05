import { FavoriteItem } from "../favorite/models/favorite.model";
import { VideoItem } from "../youtube/models/video.model";

export interface AppState {
    favorites: FavoriteItem[];
    videos: VideoItem[];
}
