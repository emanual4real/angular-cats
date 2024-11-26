import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogPromisesComponent } from './dog.component';

describe('DogComponent', () => {
  let component: DogPromisesComponent;
  let fixture: ComponentFixture<DogPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogPromisesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DogPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
