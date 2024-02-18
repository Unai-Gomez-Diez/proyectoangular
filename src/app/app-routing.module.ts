import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './comun/home/home.component';
import { PartidosModule } from './partidos/partidos.module';
import { EquiposModule } from './equipos/equipos.module';
import {ListaPartidosComponent} from "./partidos/partido/lista-partidos/lista-partidos.component";
import {PartidoComponent} from "./partidos/partido/partido.component";

const routes: Routes = [
  { path: '', component: HomeComponent, loadChildren: () => import('./comun/comun.module').then(m => m.ComunModule) },
  { path: 'partidos', component: PartidoComponent, loadChildren: () => import('./partidos/partidos.module').then(m => m.PartidosModule) },
  { path: 'equipos', component: EquiposModule, loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
