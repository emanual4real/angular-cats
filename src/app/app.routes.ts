import { Routes } from '@angular/router';
import { CatNgrxListComponent } from './ngrx';
import { catNgrxResolver } from './ngrx/resolvers';
import { CatObservableListComponent } from './observable';
import { catObservableResolver } from './observable/resolvers';
import { CatPromiseListComponent } from './promises/components';

export const routes: Routes = [
  {
    path: 'observables',
    loadComponent: () => CatObservableListComponent,
    resolve: [catObservableResolver],
  },
  {
    path: 'promises',
    loadComponent: () => CatPromiseListComponent,
  },
  {
    path: 'ngrx',
    loadComponent: () => CatNgrxListComponent,
    resolve: [catNgrxResolver],
  },
];
