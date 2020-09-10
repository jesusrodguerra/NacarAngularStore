import { TestBed } from '@angular/core/testing';

import { BolsosService } from './bolsos.service';

describe('BolsosService', () => {
  let service: BolsosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BolsosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
