import { TestBed } from '@angular/core/testing';
import { CatPromiseService } from './cat.service';

describe('CatService', () => {
  let service: CatPromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatPromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
