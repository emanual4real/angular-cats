import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import {
  BehaviorSubject,
  catchError,
  delay,
  map,
  of,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { Cat } from '../../../types/cats';

@Injectable({
  providedIn: 'root',
})
export class CatObservableService {
  // state is cached and all subscribers get updates
  private readonly catSubject = new BehaviorSubject<Cat[]>([]);
  private readonly catBeingPetSubject = new BehaviorSubject<boolean>(false);
  private readonly catToastMessageSubject = new BehaviorSubject<Message | null>(
    null
  );

  private readonly infoPettingMessage: Message = {
    severity: 'info',
    summary: 'Info',
    detail: 'Cats require 2 seconds of petting',
    life: 1500,
  };

  private readonly successfulPettingMessage: Message = {
    severity: 'success',
    summary: 'Success',
    detail: 'Thank you for petting me human!',
    life: 1500,
  };

  cats$ = this.catSubject.asObservable();
  isCatBeingPet$ = this.catBeingPetSubject.asObservable();
  catToastMessage$ = this.catToastMessageSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

  private getFailurePettingMessage(text: string) {
    return {
      severity: 'error',
      summary: 'Error',
      detail: text,
      life: 1500,
    };
  }
  getCats() {
    this.http.get<Cat[]>('http://localhost:4200/cats').subscribe((data) => {
      this.catSubject.next(data);
    });
  }

  // service is responsible for updating the logic for petting cats
  petCat(catName: string) {
    this.http
      .put<Cat>(`http://localhost:4200/cats/pet?catName=${catName}`, null)
      .pipe(
        switchMap((cat) => {
          return this.cats$.pipe(
            map((data) => {
              const catIndex = data.findIndex((row) => row.name === cat.name);

              const newData = [...data];

              newData[catIndex] = cat;

              return newData;
            }),
            take(1)
          );
        }),
        tap(() => {
          this.catBeingPetSubject.next(true);
          this.catToastMessageSubject.next(this.infoPettingMessage);
        }),
        delay(2000),
        take(1),
        catchError((error: HttpErrorResponse) => {
          this.catToastMessageSubject.next(
            this.getFailurePettingMessage(error.statusText)
          );
          return of(null);
        })
      )
      .subscribe((data) => {
        if (data) {
          this.catSubject.next(data);
          this.catToastMessageSubject.next(this.successfulPettingMessage);
        }

        this.catBeingPetSubject.next(false);
      });
  }
}
