import { createReducer, on } from "@ngrx/store";

import { CustomCard } from "../../search/models/search-item.model";
import { addCustomCard, removeCustomCard } from "../actions/custom-card.action";

export interface CustomCardState {
    customCards: CustomCard[];
}

export const initialState: CustomCardState = {
    customCards: [],
};

export const customCardReducer = createReducer(
    initialState,
    on(addCustomCard, (state, { card }) => ({
        ...state,
        customCards: [card, ...state.customCards],
    })),
    on(removeCustomCard, (state, { id }) => ({
        ...state,
        customCards: state.customCards.filter((card) => card.id !== id),
    })),
);
