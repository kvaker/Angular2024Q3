import { createFeatureSelector, createSelector } from "@ngrx/store";

import { CustomCardState } from "../reducers/custom-card.reducer";

export const selectCustomCardState = createFeatureSelector<CustomCardState>("customCards");

export const selectAllCustomCards = createSelector(
    selectCustomCardState,
    (state: CustomCardState) => state.customCards,
);
