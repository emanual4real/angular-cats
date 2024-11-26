import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Cat } from '../../../types/cats';
import { catFeature, PetCatActions } from '../../state';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [ButtonModule, CardModule, CommonModule],
  providers: [MessageService],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css',
})
export class CatNgrxComponent {
  @Input() cat!: Cat | null;

  // selector which requests data from the store
  isCatBeingPet$ = this.store.select(catFeature.selectIsBeingPetted);

  constructor(private readonly store: Store) {}

  petCat(catName?: string) {
    if (catName) {
      // Action which is just a func/method that is used to dispatch changes to the store
      this.store.dispatch(PetCatActions.petCats({ catName }));
    }
  }
}
