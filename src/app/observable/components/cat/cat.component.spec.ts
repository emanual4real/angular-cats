import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatObservableComponent } from './cat.component';

describe('CatComponent', () => {
  let component: CatObservableComponent;
  let fixture: ComponentFixture<CatObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatObservableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
