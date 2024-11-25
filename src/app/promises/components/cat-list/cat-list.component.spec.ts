import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatPromiseListComponent } from './cat-list.component';

describe('CatListComponent', () => {
  let component: CatPromiseListComponent;
  let fixture: ComponentFixture<CatPromiseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatPromiseListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatPromiseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
