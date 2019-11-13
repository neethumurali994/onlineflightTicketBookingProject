import { TestBed } from '@angular/core/testing';

import { AdminaddService } from './adminadd.service';

describe('AdminaddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminaddService = TestBed.get(AdminaddService);
    expect(service).toBeTruthy();
  });
});
