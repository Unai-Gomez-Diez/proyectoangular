import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePartidoComponent } from './partido/detalle-partido/detalle-partido.component';
import { ListaPartidosComponent } from './partido/lista-partidos/lista-partidos.component';
import { FormularioSucesoComponent } from './partido/formulario-suceso/formulario-suceso.component';
import { FormularioPartidoComponent } from './partido/formulario-partido/formulario-partido.component';
import {ReactiveFormsModule} from "@angular/forms";
import {PartidoComponent} from "./partido/partido.component";
import {RouterOutlet} from "@angular/router";
import {PartidosRoutingModule} from "./partidos-routing.module";


@NgModule({
  declarations:
    [DetallePartidoComponent,
    ListaPartidosComponent,
    FormularioSucesoComponent,
    FormularioPartidoComponent,
    PartidoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    PartidosRoutingModule
  ],
  exports: [
    DetallePartidoComponent,
    ListaPartidosComponent,
    FormularioSucesoComponent,
    FormularioPartidoComponent,
    PartidoComponent
  ]
})
export class PartidosModule { }
