import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { catResolver } from './cat.resolver';

describe('catResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => catResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
