import { TestBed } from '@angular/core/testing';

import { CandidateregService } from './candidatereg.service';

describe('CandidateregService', () => {
  let service: CandidateregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidateregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
