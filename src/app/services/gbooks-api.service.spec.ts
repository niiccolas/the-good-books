import { TestBed } from '@angular/core/testing';

import { GbooksApiService } from './gbooks-api.service';

describe('GbooksApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GbooksApiService = TestBed.get(GbooksApiService);
    expect(service).toBeTruthy();
  });
});
