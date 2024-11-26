import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, exhaustMap, map } from 'rxjs/operators';
import { CatNgrxService } from '../services';
import { GetCatActions, PetCatActions } from './cats.action';

@Injectable()
export class CatEffects {
  getCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetCatActions.getCats),
      exhaustMap(() =>
        this.catService.getCats().pipe(
          map((cats) => GetCatActions.getCatsSuccess({ res: cats })),
          catchError((err) => of(GetCatActions.getCatsFailure({ res: err })))
        )
      )
    )
  );

  petCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PetCatActions.petCats),
      exhaustMap((action) =>
        this.catService.petCat(action.catName).pipe(
          delay(2000),
          map((cats) => PetCatActions.petCatsSuccess({ res: cats })),
          catchError((err) => of(PetCatActions.petCatsFailure({ res: err })))
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly catService: CatNgrxService
  ) {}
}
