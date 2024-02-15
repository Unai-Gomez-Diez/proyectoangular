import { Injectable } from '@angular/core';
import { partidos_data } from '../data/partidos.data';
import { Partido } from '../data/partido';


@Injectable({
  providedIn: 'root'
})
export class GestorPartidosService {
  partidos?: Partido[] = partidos_data
  constructor() { }

  getPartidos() {
    return this.partidos
  }
}
