import { TestBed } from '@angular/core/testing';

import { GestorEquiposService } from './gestor-equipos.service';

describe('GestorEquiposService', () => {
  let service: GestorEquiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestorEquiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
