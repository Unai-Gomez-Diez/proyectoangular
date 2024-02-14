import { TestBed } from '@angular/core/testing';

import { GestorPartidosService } from './gestor-partidos.service';

describe('GestorPartidosService', () => {
  let service: GestorPartidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorPartidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
