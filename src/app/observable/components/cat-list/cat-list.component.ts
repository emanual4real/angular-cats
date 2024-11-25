import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { Observable, Subscription, tap } from 'rxjs';
import { Cat } from '../../../types/cats';
import { CatObservableService } from '../../services/cat/cat.service';
import { CatObservableComponent } from '../cat/cat.component';

@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [CatObservableComponent, CommonModule, RippleModule, ToastModule],
  providers: [MessageService],
  templateUrl: './cat-list.component.html',
  styleUrl: './cat-list.component.css',
})
export class CatObservableListComponent implements OnInit, OnDestroy {
  cats$: Observable<Cat[]> = this.catService.cats$;
  isCatBeingPet$ = this.catService.isCatBeingPet$.pipe(
    tap((pet) => {
      if (pet) {
        this.showPetMessage();
      }
    })
  );

  catPetSubscription!: Subscription;

  constructor(
    private readonly catService: CatObservableService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.catPetSubscription = this.isCatBeingPet$.subscribe();
  }

  showPetMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Cats require 2 seconds of petting',
      life: 1500,
    });
  }

  ngOnDestroy(): void {
    this.catPetSubscription.unsubscribe();
  }
}
