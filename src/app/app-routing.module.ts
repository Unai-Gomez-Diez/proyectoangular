import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './comun/home/home.component';
import { PartidosModule } from './partidos/partidos.module';
import { EquiposModule } from './equipos/equipos.module';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'partidos', component: PartidosModule, loadChildren: () => import('./partidos/partidos.module').then(m => m.PartidosModule) },
  { path: 'equipos', component: EquiposModule, loadChildren: () => import('./equipos/equipos.module').then(m => m.EquiposModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
