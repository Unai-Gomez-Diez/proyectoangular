import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Reemplaza 'listado' con la ruta que desees
  // Agrega más rutas si es necesario
];

@NgModule({
  declarations: [], // Asegúrate de declarar tus componentes aquí
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartidosModule { }
