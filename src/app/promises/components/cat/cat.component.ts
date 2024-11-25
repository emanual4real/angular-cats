import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Cat } from '../../../types/cats';
import { CatPromiseService } from '../../services';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [ButtonModule, CardModule, CommonModule],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css',
})
export class CatPromiseComponent {
  @Input() cat!: Cat | null;
  @Output() petCat = new EventEmitter<string>();

  constructor(private readonly catService: CatPromiseService) {}

  squirtCat(catName?: string) {
    if (catName) {
      this.catService.squirtCat(catName);
    }
  }
}
