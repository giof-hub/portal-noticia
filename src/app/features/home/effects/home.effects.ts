import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { HomeService } from "../home.service";
import { mergeMap } from "rxjs/operators";
import { loadTest, loadTestSuccess } from "../actions/home.actions";

@Injectable()
export class HomeEffects {

    constructor(
        private actions$: Actions,
        private service: HomeService
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