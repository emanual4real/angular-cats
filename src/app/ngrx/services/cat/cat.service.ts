import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../../../types/cats';

@Injectable({
  providedIn: 'root',
})
export class CatNgrxService {
  constructor(private readonly http: HttpClient) {}

  getCats() {
    return this.http.get<Cat[]>('http://localhost:4200/cats');
  }

  petCat(catName: string) {
    return this.http.put<Cat>(
      `http://localhost:4200/cats/pet?catName=${catName}`,
      null
    );
  }
}
