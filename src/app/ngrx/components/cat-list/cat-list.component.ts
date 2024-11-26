import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Message, MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { Observable, Subscription, tap } from 'rxjs';
import { Cat } from '../../../types/cats';
import { catFeature } from '../../state';
import { CatNgrxComponent } from '../cat/cat.component';

@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [CatNgrxComponent, CommonModule, RippleModule, ToastModule],
  providers: [MessageService],
  templateUrl: './cat-list.component.html',
  styleUrl: './cat-list.component.css',
})
export class CatNgrxListComponent implements OnInit, OnDestroy {
  cats$: Observable<Cat[]> = this.store.select(catFeature.selectCats);
  // deferred, meaning it does not run until you subscribe
  catToastMessage$ = this.store.select(catFeature.selectCatToastMessage).pipe(
    tap((toastMessage) => {
      if (toastMessage) {
        this.showPetMessage(toastMessage);
      }
    })
  );

  catToastMessageSubscription!: Subscription;

  constructor(
    private readonly store: Store,
    private readonly messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.catToastMessageSubscription = this.catToastMessage$.subscribe();
  }

  showPetMessage(message: Message) {
    this.messageService.add(message);
  }

  ngOnDestroy(): void {
    this.catToastMessageSubscription.unsubscribe();
  }
}
