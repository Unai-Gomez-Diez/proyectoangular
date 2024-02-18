import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePartidoComponent } from './partido/detalle-partido/detalle-partido.component';
import { ListaPartidosComponent } from './partido/lista-partidos/lista-partidos.component';
import { FormularioSucesoComponent } from './partido/formulario-suceso/formulario-suceso.component';
import { FormularioPartidoComponent } from './partido/formulario-partido/formulario-partido.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [DetallePartidoComponent,
    ListaPartidosComponent,
    FormularioSucesoComponent,
    FormularioPartidoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DetallePartidoComponent,
    ListaPartidosComponent,
    FormularioSucesoComponent,
    FormularioPartidoComponent

  ]
})
export class PartidosModule { }
