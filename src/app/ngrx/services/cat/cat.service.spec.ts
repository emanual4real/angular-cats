import { TestBed } from '@angular/core/testing';
import { CatNgrxService } from './cat.service';

describe('CatService', () => {
  let service: CatNgrxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatNgrxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
