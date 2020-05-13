import { TestBed } from '@angular/core/testing';

import { CsapiService } from './csapi.service';

describe('CsapiService', () => {
  let service: CsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
