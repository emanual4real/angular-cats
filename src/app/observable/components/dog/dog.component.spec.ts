import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogNgrxComponent } from './dog.component';

describe('DogComponent', () => {
  let component: DogNgrxComponent;
  let fixture: ComponentFixture<DogNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogNgrxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DogNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
