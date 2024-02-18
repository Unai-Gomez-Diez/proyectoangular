import { Component, OnInit } from '@angular/core';
import { GestorPartidosService } from '../../../Servicios/gestor-partidos.service';
import { Partido } from '../../../data/partido';

@Component({
  selector: 'app-lista-partidos',
  templateUrl: './lista-partidos.component.html',
  styleUrl: './lista-partidos.component.css'
})
export class ListaPartidosComponent implements OnInit {
  partidos: Partido[] | undefined
  constructor(private service: GestorPartidosService) { }
  ngOnInit(): void {
    this.partidos = this.service.getPartidos()
  }
}
