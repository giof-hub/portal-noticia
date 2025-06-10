import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Service } from "../portal.service";
import { mergeMap } from "rxjs/operators";
import { loadCategories, loadCategoriesSuccess, loadLogin, loadLoginSuccess, loadTest, loadTestSuccess } from "../actions/portal.actions";
import { stopLoad } from "../actions/core.actions";

@Injectable()
export class PortalEffects {

    constructor(
        private actions$: Actions,
        private service: Service
    ) {}

    teste$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTest),
            mergeMap((action) => 
                this.service.teste().pipe(
                    mergeMap((result) => [
                        loadTestSuccess({ result })
                    ])
                )
            )
        )
    );

    categories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCategories),
            mergeMap((action) => 
                this.service.categories().pipe(
                    mergeMap((result) => [
                        loadCategoriesSuccess({ result })
                    ])
                )
            )
        )
    );

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadLogin),
            mergeMap((action) => 
                this.service.login(action.data).pipe(
                    mergeMap((token) => [
                        stopLoad(),
                        loadLoginSuccess({ token })
                    ])
                )
            )
        )
    );

}