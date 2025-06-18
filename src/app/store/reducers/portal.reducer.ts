import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as Actions from "../actions/portal.actions";
import { Result } from "../../models/result.model";
import { Category } from "../../models/category.model";
import { Menu } from "../../models/menu.model";

export const portalFeatureKey = 'portal';

export interface State extends EntityState<any> {

    categories: Menu[],
    token: string

}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState: State = adapter.getInitialState({

    categories: [],
    token: null

});

export const reducer = createReducer(
    initialState,
    on(
        Actions.loadCategoriesSuccess,
        (state, { result }) =>  ({
            ...state,
            categories: result.result
        })
    ),
    on(
        Actions.clearLoadCategories,
        (state) =>  ({
            ...state,
            categories: []
        })
    ),
    on(
        Actions.loadLoginSuccess,
        (state, { token }) =>  ({
            ...state,
            token: token.result
        })
    ),
)

export const selectFeature = createFeatureSelector<State> (
    portalFeatureKey
);

export const selectCategories = createSelector(
  selectFeature,
  (i: State) => i.categories  
);

export const selectLoginToken = createSelector(
  selectFeature,
  (i: State) => i.token  
);