import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { Cat } from '../../../types';
import { CatPromiseService } from '../../services/cat/cat.service';
import { CatPromiseComponent } from '../cat/cat.component';

@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [CatPromiseComponent, CommonModule, RippleModule, ToastModule],
  providers: [MessageService],
  templateUrl: './cat-list.component.html',
  styleUrl: './cat-list.component.css',
})
export class CatPromiseListComponent implements OnInit, OnDestroy {
  cats: Cat[] = [];
  isCatBeingPet = false;
  intervalRef!: ReturnType<typeof setInterval>;

  constructor(
    private readonly catService: CatPromiseService,
    private readonly messageService: MessageService
  ) {}

  // Data only gets updated once.  If the services updates from another component/service, we won't know about it.
  async ngOnInit(): Promise<void> {
    this.cats = await this.catService.getCats();

    this.intervalRef = setInterval(() => {
      console.log(
        'this.catService.isCatBeingPet',
        this.catService.isCatBeingPet
      );
      this.isCatBeingPet = this.catService.isCatBeingPet;

      // every 2 seconds we set isCatBeingPet to false even if it is already false
      setTimeout(() => {
        this.catService.isCatBeingPet = false;
      }, 2000);
    }, 1000);
  }

  // Parent has to handle child events in order to update local cat state
  handlePetCat($event: string) {
    this.catService.isCatBeingPet = true;
    this.showPetMessage(this.catService.infoPettingMessage);

    this.catService.petCat($event).then((updatedCat) => {
      if ('error' in updatedCat) {
        const failureMessage = this.catService.getFailurePettingMessage(
          updatedCat.statusText
        );
        this.showPetMessage(failureMessage);
        this.catService.isCatBeingPet = false;
      } else {
        const catIndex = this.cats.findIndex(
          (row) => row.name === updatedCat.name
        );

        this.cats[catIndex] = updatedCat;

        setTimeout(() => {
          this.showPetMessage(this.catService.successfulPettingMessage);
        }, 2000);
      }
    });
  }

  showPetMessage(message: Message) {
    this.messageService.add(message);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }
}
