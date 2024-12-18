import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs';
import { catFeature } from '../../../ngrx';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css',
})
export class DogNgrxComponent {
  dogIsJealous$ = this.store
    .select(catFeature.selectIsBeingPetted)
    .pipe(debounceTime(1000));

  constructor(private readonly store: Store) {}
}
