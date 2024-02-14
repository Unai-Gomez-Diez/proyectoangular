import { TestBed } from '@angular/core/testing';

import { GestorSucesosService } from './gestor-sucesos.service';

describe('GestorSucesosService', () => {
  let service: GestorSucesosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorSucesosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
