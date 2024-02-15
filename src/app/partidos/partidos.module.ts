import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallePartidoComponent } from './detalle-partido/detalle-partido.component';
import { ListaPartidosComponent } from './lista-partidos/lista-partidos.component';
import { FormularioSucesoComponent } from './formulario-suceso/formulario-suceso.component';
import { FormularioPartidoComponent } from './formulario-partido/formulario-partido.component';



@NgModule({
  declarations: [DetallePartidoComponent,
    ListaPartidosComponent,
    FormularioSucesoComponent,
    FormularioPartidoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DetallePartidoComponent,
    ListaPartidosComponent,
    FormularioSucesoComponent,
    FormularioPartidoComponent

  ]
})
export class PartidosModule { }
