import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as CoreActions from "../actions/core.actions";

export const coreFeatureKey = 'core';

export interface State extends EntityState<any> {

    loading: boolean

}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState: State = adapter.getInitialState({

    loading: false

});

export const reducer = createReducer(
    initialState,
    on(
        CoreActions.startLoad,
        (state) =>  ({
            ...state,
            loading: true
        })
    ),
    on(
        CoreActions.stopLoad,
        (state) =>  ({
            ...state,
            loading: false
        })
    )
)

export const selectFeature = createFeatureSelector<State> (
    coreFeatureKey
);

export const selectLoading = createSelector(
  selectFeature,
  (i: State) => i.loading  
);