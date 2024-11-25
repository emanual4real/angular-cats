import { Routes } from '@angular/router';
import { CatObservableListComponent } from './observable';
import { catResolver } from './observable/resolvers';
import { CatPromiseListComponent } from './promises/components';

export const routes: Routes = [
  {
    path: 'observables',
    loadComponent: () => CatObservableListComponent,
    resolve: [catResolver],
  },
  {
    path: 'promises',
    loadComponent: () => CatPromiseListComponent,
  },
];
