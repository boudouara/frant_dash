import { TestBed } from '@angular/core/testing';

import { TemplatesService } from './templates-service.service';

describe('TemplatesServiceService', () => {
  let service: TemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
