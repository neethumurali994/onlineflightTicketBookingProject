import { TestBed } from '@angular/core/testing';

import { CheckavailabiltyService } from './checkavailabilty.service';

describe('CheckavailabiltyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckavailabiltyService = TestBed.get(CheckavailabiltyService);
    expect(service).toBeTruthy();
  });
});
