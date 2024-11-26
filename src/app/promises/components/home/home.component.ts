import { Component } from '@angular/core';
import { CatPromiseListComponent } from '../cat-list';
import { DogPromisesComponent } from '../dog/dog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DogPromisesComponent, CatPromiseListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomePromisesComponent {}
