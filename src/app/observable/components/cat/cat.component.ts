import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Cat } from '../../../types/cats';
import { CatObservableService } from '../../services';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [ButtonModule, CardModule, CommonModule],
  providers: [MessageService],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css',
})
export class CatObservableComponent {
  // Child can get updates directly from the parent via @Input() or from the service
  // The service provides an observable that emits updates to all subscribers.
  // Child can also request changes from the service without going through the parent
  @Input() cat!: Cat | null;

  isCatBeingPet$ = this.catService.isCatBeingPet$;

  constructor(private readonly catService: CatObservableService) {}

  petCat(catName?: string) {
    if (catName) {
      this.catService.petCat(catName);
    }
  }
}
