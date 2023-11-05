import { TestBed } from '@angular/core/testing';

import { VendureService } from './vendure.service';

describe('VendureService', () => {
  let service: VendureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
