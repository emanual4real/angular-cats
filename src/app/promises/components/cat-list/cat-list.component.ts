import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class CatPromiseListComponent implements OnInit {
  myCats: Cat[] = [];
  isCatBeingPetted = false;

  constructor(
    private readonly catService: CatPromiseService,
    private readonly messageService: MessageService
  ) {}

  // Data only gets updated once.  If the services updates from another component/service, we won't know about it.
  async ngOnInit(): Promise<void> {
    this.myCats = await this.catService.getCats();
  }

  // Parent has to handle child events in order to update local cat state
  handlePetCat($event: string) {
    this.isCatBeingPetted = true;
    this.showPetMessage(this.catService.infoPettingMessage);

    this.catService.petCat($event).then((updatedCat) => {
      if ('error' in updatedCat) {
        const failureMessage = this.catService.getFailurePettingMessage(
          updatedCat.statusText
        );
        this.showPetMessage(failureMessage);
        this.isCatBeingPetted = false;
      } else {
        const catIndex = this.myCats.findIndex(
          (row) => row.name === updatedCat.name
        );

        this.myCats[catIndex] = updatedCat;

        setTimeout(() => {
          this.isCatBeingPetted = false;
          this.showPetMessage(this.catService.successfulPettingMessage);
        }, 2000);
      }
    });
  }

  showPetMessage(message: Message) {
    this.messageService.add(message);
  }
}
