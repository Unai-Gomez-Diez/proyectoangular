import { Injectable } from '@angular/core';
import { partidos_data } from '../data/partidos.data';
import { Partido } from '../data/partido';
import {PartidoComponent} from "../partidos/partido/partido.component";


@Injectable({
  providedIn: 'root'
})
export class GestorPartidosService {
  partidos?: Partido[] = partidos_data
  constructor() { }

  getPartidos() {
    return this.partidos
  }

  modPartidos(partido: Partido){
    partido.idPartido = String(this.partidos!.length + 1)
    this.partidos!.push(partido)
  }
}
