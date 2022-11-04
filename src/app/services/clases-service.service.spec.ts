import { TestBed } from '@angular/core/testing';

import { ClasesServiceService } from './clases-service.service';

describe('ClasesServiceService', () => {
  let service: ClasesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClasesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
