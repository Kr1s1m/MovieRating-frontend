import { TestBed } from '@angular/core/testing';

import { IndividualService } from './individual.service';

describe('IndividualService', () => {
  let service: IndividualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
