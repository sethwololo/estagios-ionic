import { TestBed } from '@angular/core/testing';

import { OporService } from './opor.service';

describe('OporService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OporService = TestBed.get(OporService);
    expect(service).toBeTruthy();
  });
});
