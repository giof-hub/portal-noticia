import { createAction } from "@ngrx/store";

export const startLoad = createAction(
    '[Core/API] Start Load'
);

export const stopLoad = createAction(
    '[Core/API] Stop Load'
);