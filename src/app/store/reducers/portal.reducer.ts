import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as Actions from "../actions/portal.actions";
import { Result } from "../../models/result.model";
import { Category } from "../../models/category.model";

export const portalFeatureKey = 'portal';

export interface State extends EntityState<any> {

    categories: Category[]

}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState: State = adapter.getInitialState({

    categories: [] 

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
            result: null
        })
    )
)

export const selectFeature = createFeatureSelector<State> (
    portalFeatureKey
);

export const selectCategories = createSelector(
  selectFeature,
  (i: State) => i.categories  
);