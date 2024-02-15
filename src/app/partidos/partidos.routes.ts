import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaPartidosComponent } from './lista-partidos/lista-partidos.component'; // Reemplaza con el nombre real de tu componente

const routes: Routes = [
  { path: 'listado', component: ListaPartidosComponent }, // Reemplaza 'listado' con la ruta que desees
  // Agrega más rutas si es necesario
];

@NgModule({
  declarations: [], // Asegúrate de declarar tus componentes aquí
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartidosModule { }
