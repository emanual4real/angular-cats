import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatPromiseService } from '../../services';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css',
})
export class DogPromisesComponent implements OnInit, OnDestroy {
  isCatBeingPet = false;
  intervalRef!: ReturnType<typeof setInterval>;

  constructor(private readonly catService: CatPromiseService) {}

  ngOnInit(): void {
    this.intervalRef = setInterval(() => {
      this.isCatBeingPet = this.catService.isCatBeingPet;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }
}
