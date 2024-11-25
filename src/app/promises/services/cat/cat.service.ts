import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, lastValueFrom, take } from 'rxjs';
import { Cat } from '../../../types/cats';

@Injectable({
  providedIn: 'root',
})
export class CatPromiseService {
  constructor(private readonly http: HttpClient) {}

  async getCats() {
    const request$ = this.http
      .get<Cat[]>('http://localhost:4200/cats')
      .pipe(take(1));

    return await lastValueFrom<Cat[]>(request$);
  }

  async petCat(catName: string) {
    const request$ = this.http
      .put<Cat>(`http://localhost:4200/cats/pet?catName=${catName}`, null)
      .pipe(take(1));

    return await lastValueFrom<Cat>(request$);
  }

  squirtCat(catName: string) {
    return firstValueFrom(
      this.http.put<Cat>(
        `http://localhost:4200/cats/squirt?catName=${catName}`,
        null
      )
    );
  }
}
