import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { VideoEffects } from "./effects/video.effects";
import { favoriteReducer } from "./reducers/favorite.reducer";
import { videoReducer } from "./reducers/video.reducer";

@NgModule({
    imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature("favorites", favoriteReducer),
        StoreModule.forFeature("videos", videoReducer),
        EffectsModule.forRoot([VideoEffects]),
    ],
})
export class AppStoreModule {}
