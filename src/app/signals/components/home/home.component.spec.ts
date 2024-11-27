import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSignalComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeSignalComponent;
  let fixture: ComponentFixture<HomeSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
