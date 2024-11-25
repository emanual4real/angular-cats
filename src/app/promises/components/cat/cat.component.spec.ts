import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPromiseComponent } from './cat.component';

describe('CatComponent', () => {
  let component: CatPromiseComponent;
  let fixture: ComponentFixture<CatPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatPromiseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
