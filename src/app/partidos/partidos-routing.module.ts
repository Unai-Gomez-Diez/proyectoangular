import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaPartidosComponent } from './partido/lista-partidos/lista-partidos.component';
import {FormularioPartidoComponent} from "./partido/formulario-partido/formulario-partido.component"; // Reemplaza con el nombre real de tu componente

const routes: Routes = [
  { path: 'partidos', component: ListaPartidosComponent },
  { path: 'agregar', component: FormularioPartidoComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartidosRoutingModule { }
