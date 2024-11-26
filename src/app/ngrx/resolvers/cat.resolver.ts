import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { of, switchMap } from 'rxjs';
import { GetCatActions, selectLoading } from '../state';

export const catNgrxResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store);

  const isCatsLoading$ = store.select(selectLoading);

  return isCatsLoading$.pipe(
    switchMap((loading) => {
      if (!loading) {
        store.dispatch(GetCatActions.getCats());
      }
      return of(true);
    })
  );
};
