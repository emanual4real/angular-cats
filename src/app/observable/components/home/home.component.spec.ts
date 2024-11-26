import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeObservableComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeObservableComponent;
  let fixture: ComponentFixture<HomeObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeObservableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
