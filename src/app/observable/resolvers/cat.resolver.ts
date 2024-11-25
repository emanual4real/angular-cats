import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CatObservableService } from '../services';

export const catResolver: ResolveFn<boolean> = (route, state) => {
  const catService = inject(CatObservableService);

  catService.getCats();

  return true;
};
