import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNgrxComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeNgrxComponent;
  let fixture: ComponentFixture<HomeNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeNgrxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
