import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, switchMap, take, tap } from 'rxjs';
import { Cat } from '../../../types/cats';

@Injectable({
  providedIn: 'root',
})
export class CatObservableService {
  // state is cached and all subscribers get updates
  private readonly catSubject = new BehaviorSubject<Cat[]>([]);
  private readonly catBeingPetSubject = new BehaviorSubject<boolean>(false);

  cats$ = this.catSubject.asObservable();
  isCatBeingPet$ = this.catBeingPetSubject.asObservable();

  constructor(private readonly http: HttpClient) {}

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
        }),
        delay(2000),
        take(1)
      )
      .subscribe((data) => {
        this.catSubject.next(data);
        this.catBeingPetSubject.next(false);
      });
  }
}
