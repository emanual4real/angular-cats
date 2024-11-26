import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CatObservableService } from '../../services';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css',
})
export class DogObservableComponent {
  dogIsJealous$ = this.catService.isCatBeingPet$;

  constructor(private readonly catService: CatObservableService) {}
}
