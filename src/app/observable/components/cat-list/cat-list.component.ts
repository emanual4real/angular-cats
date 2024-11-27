import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
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
  isCatBeingPet$ = this.catService.isCatBeingPet$;
  // deferred, meaning it does not run until you subscribe
  toastMessage$ = this.catService.catToastMessage$.pipe(
    tap((petMessage) => {
      if (petMessage) {
        this.showPetMessage(petMessage);
      }
    })
  );

  catToastMessageSubscription!: Subscription;

  constructor(
    private readonly catService: CatObservableService,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    // Don't need to prefetch data in component; concern is separated in the resolver

    // subscribe to toastMessage changes
    this.catToastMessageSubscription = this.toastMessage$.subscribe();
  }

  showPetMessage(message: Message) {
    this.messageService.add(message);
  }

  ngOnDestroy(): void {
    this.catToastMessageSubscription.unsubscribe();
  }
}
