import { Routes } from '@angular/router';
import { HomeNgrxComponent } from './ngrx/components/home';
import { catNgrxResolver } from './ngrx/resolvers';
import { HomeObservableComponent } from './observable';
import { catObservableResolver } from './observable/resolvers';
import { HomePromisesComponent } from './promises/components/home/home.component';

export const routes: Routes = [
  {
    path: 'observables',
    loadComponent: () => HomeObservableComponent,
    resolve: [catObservableResolver],
  },
  {
    path: 'promises',
    loadComponent: () => HomePromisesComponent,
  },
  {
    path: 'ngrx',
    loadComponent: () => HomeNgrxComponent,
    resolve: [catNgrxResolver],
  },
];
