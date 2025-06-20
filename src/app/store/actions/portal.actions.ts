import { createAction, props } from "@ngrx/store";
import { Result } from "../../models/result.model";
import { Login } from "../../models/login.model";
import { Menu } from "../../models/menu.model";

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

export const loadCategories = createAction(
    '[Category/API] Load categories'
);

export const loadCategoriesSuccess = createAction(
    '[Category/API] Load categories success',
    props<{ result: Result<Menu[]> }>()
);

export const clearLoadCategories = createAction(
    '[Category/API] Clear Load categories'
);

export const loadLogin = createAction(
    '[Login/API] Load login',
    props<{data: Login}>()
);

export const loadLoginSuccess = createAction(
    '[Login/API] Load login success',
    props<{ token: Result<string> }>()
);