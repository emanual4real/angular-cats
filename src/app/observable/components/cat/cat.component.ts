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
  @Input() cat!: Cat | null;

  isCatBeingPet$ = this.catService.isCatBeingPet$;

  constructor(private readonly catService: CatObservableService) {}

  squirtCat(catName?: string) {
    if (catName) {
      this.catService.squirtCat(catName);
    }
  }
  petCat(catName?: string) {
    if (catName) {
      this.catService.petCat(catName);
    }
  }
}
