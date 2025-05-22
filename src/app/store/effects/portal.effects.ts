import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Service } from "../portal.service";
import { mergeMap } from "rxjs/operators";
import { loadTest, loadTestSuccess } from "../actions/portal.actions";

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

}