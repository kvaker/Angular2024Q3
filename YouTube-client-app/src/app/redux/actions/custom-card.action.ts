import { createAction, props } from "@ngrx/store";

import { CustomCard } from "../../search/models/search-item.model";

export const addCustomCard = createAction(
    "[Admin Page] Add Custom Card",
    props<{ card: CustomCard }>()
);

export const removeCustomCard = createAction(
    "[Video List] Remove Custom Card",
    props<{ id: string }>()
);
