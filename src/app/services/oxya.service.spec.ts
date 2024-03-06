import { TestBed } from '@angular/core/testing';

import { OxyaService } from './oxya.service';

describe('OxyaService', () => {
  let service: OxyaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OxyaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
