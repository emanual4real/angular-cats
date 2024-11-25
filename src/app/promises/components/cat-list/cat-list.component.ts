import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
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
    this.catService.petCat($event).then((updatedCat) => {
      const catIndex = this.myCats.findIndex(
        (row) => row.name === updatedCat.name
      );

      this.myCats[catIndex] = updatedCat;
      this.showPetMessage();
      setTimeout(() => {
        this.isCatBeingPetted = false;
      }, 2000);
    });
  }

  showPetMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Cats require 2 seconds of petting',
      life: 1500,
    });
  }
}
