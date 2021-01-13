import { TestBed } from '@angular/core/testing';

import { ComparepdtService } from './comparepdt.service';

describe('ComparepdtService', () => {
  let service: ComparepdtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparepdtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
