import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { catObservableResolver } from './cat.resolver';

describe('catResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() =>
      catObservableResolver(...resolverParameters)
    );

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
