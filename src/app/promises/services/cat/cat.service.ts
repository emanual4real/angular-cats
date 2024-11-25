import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, take } from 'rxjs';
import { Cat } from '../../../types/cats';

@Injectable({
  providedIn: 'root',
})
export class CatPromiseService {
  constructor(private readonly http: HttpClient) {}

  // No caching, state is not saved anywhere except the component that requests it.
  async getCats() {
    const request$ = this.http
      .get<Cat[]>('http://localhost:4200/cats')
      .pipe(take(1));

    return await lastValueFrom<Cat[]>(request$);
  }

  // Component is responsible for updating the cat state and doing stuff with it
  async petCat(catName: string) {
    const request$ = this.http
      .put<Cat>(`http://localhost:4200/cats/pet?catName=${catName}`, null)
      .pipe(take(1));

    return await lastValueFrom<Cat>(request$);
  }
}
