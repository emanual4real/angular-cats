import { Component } from '@angular/core';
import { CatObservableListComponent } from '../cat-list';
import { DogObservableComponent } from '../dog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DogObservableComponent, CatObservableListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeObservableComponent {}
