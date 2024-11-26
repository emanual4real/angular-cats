import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePromisesComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomePromisesComponent;
  let fixture: ComponentFixture<HomePromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePromisesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
