import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatObservableListComponent } from './cat-list.component';

describe('CatListComponent', () => {
  let component: CatObservableListComponent;
  let fixture: ComponentFixture<CatObservableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatObservableListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CatObservableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
