import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Cat } from '../../../types/cats';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [ButtonModule, CardModule, CommonModule],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css',
})
export class CatPromiseComponent {
  // This component only updates if cat or isCatBeingPetted are updated from the parent.  Calling the catService will not update the child.
  // The child has to tell the parent to update and the parent has to call the service
  @Input() cat!: Cat | null;
  @Input() isCatBeingPetted = false;
  @Output() petCat = new EventEmitter<string>();
}
