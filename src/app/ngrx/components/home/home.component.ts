import { Component } from '@angular/core';
import { CatNgrxListComponent } from '../cat-list';
import { DogNgrxComponent } from '../dog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CatNgrxListComponent, DogNgrxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeNgrxComponent {}
