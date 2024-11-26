import { HttpErrorResponse } from '@angular/common/http';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Cat } from '../../types';

export const GetCatActions = createActionGroup({
  source: 'Cats',
  events: {
    'Get Cats': emptyProps(),
    'Get Cats Success': props<{ res: Cat[] }>(),
    'Get Cats Failure': props<{ res: HttpErrorResponse }>(),
  },
});

export const PetCatActions = createActionGroup({
  source: 'Cats',
  events: {
    'Pet Cats': props<{ catName: string }>(),
    'Pet Cats Success': props<{ res: Cat }>(),
    'Pet Cats Failure': props<{ res: HttpErrorResponse }>(),
  },
});
