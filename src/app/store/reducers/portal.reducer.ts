import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import * as HomeActions from "../actions/portal.actions";

export const portalFeatureKey = 'portal';

export interface State extends EntityState<any> {

    teste: any

}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState: State = adapter.getInitialState({

    teste: null

});

export const reducer = createReducer(
    initialState,
    on(
        HomeActions.loadTestSuccess,
        (state, { result }) =>  ({
            ...state,
            result: result.result
        })
    ),
    on(
        HomeActions.clearLoadTeste,
        (state) =>  ({
            ...state,
            result: null
        })
    )
)

export const selectFeature = createFeatureSelector<State> (
    portalFeatureKey
);

export const selectTeste = createSelector(
  selectFeature,
  (i: State) => i.teste  
);