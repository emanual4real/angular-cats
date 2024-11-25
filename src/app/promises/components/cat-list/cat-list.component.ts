import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Cat } from '../../../types';
import { CatPromiseService } from '../../services/cat/cat.service';
import { CatPromiseComponent } from '../cat/cat.component';

@Component({
  selector: 'app-cat-list',
  standalone: true,
  imports: [CatPromiseComponent, CommonModule],
  templateUrl: './cat-list.component.html',
  styleUrl: './cat-list.component.css',
})
export class CatPromiseListComponent implements OnInit {
  myCats: Cat[] = [];

  constructor(private readonly catService: CatPromiseService) {}

  async ngOnInit(): Promise<void> {
    this.myCats = await this.catService.getCats();
  }

  async handlePetCat($event: string) {
    const updatedCat = await this.catService.petCat($event);

    const catIndex = this.myCats.findIndex(
      (row) => row.name === updatedCat.name
    );

    this.myCats[catIndex] = updatedCat;
  }
}
