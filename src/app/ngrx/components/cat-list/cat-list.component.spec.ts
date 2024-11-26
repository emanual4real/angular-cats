import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNgrxListComponent } from './cat-list.component';

describe('CatListComponent', () => {
  let component: CatNgrxListComponent;
  let fixture: ComponentFixture<CatNgrxListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatNgrxListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatNgrxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
