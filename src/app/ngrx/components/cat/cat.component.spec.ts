import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNgrxComponent } from './cat.component';

describe('CatComponent', () => {
  let component: CatNgrxComponent;
  let fixture: ComponentFixture<CatNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatNgrxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
