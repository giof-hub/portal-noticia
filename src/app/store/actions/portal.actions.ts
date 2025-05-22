import { createAction, props } from "@ngrx/store";
import { Result } from "../../models/resul.model";

export const loadTest = createAction(
    '[Home/API] Load teste',
    props<{ id: number }>()
);

export const loadTestSuccess = createAction(
    '[Home/API] Load teste success',
    props<{ result: Result<any> }>()
);

export const clearLoadTeste = createAction(
    '[Home/API] Clear Load teste'
);