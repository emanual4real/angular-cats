import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { catchError, lastValueFrom, of, take } from 'rxjs';
import { Cat } from '../../../types/cats';

@Injectable({
  providedIn: 'root',
})
export class CatPromiseService {
  constructor(private readonly http: HttpClient) {}

  readonly infoPettingMessage: Message = {
    severity: 'info',
    summary: 'Info',
    detail: 'Cats require 2 seconds of petting',
    life: 1500,
  };

  readonly successfulPettingMessage: Message = {
    severity: 'success',
    summary: 'Success',
    detail: 'Thank you for petting me human!',
    life: 1500,
  };

  getFailurePettingMessage(text: string) {
    return {
      severity: 'error',
      summary: 'Error',
      detail: text,
      life: 1500,
    };
  }

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
      .pipe(
        take(1),
        catchError((err: HttpErrorResponse) => of(err))
      );

    return await lastValueFrom<Cat | HttpErrorResponse>(request$);
  }
}
