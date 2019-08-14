import { TestBed } from '@angular/core/testing';

import { GetQuotesService } from './get-quotes.service';

describe('GetQuotesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetQuotesService = TestBed.get(GetQuotesService);
    expect(service).toBeTruthy();
  });
});
