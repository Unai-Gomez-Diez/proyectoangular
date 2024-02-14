import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CabeceraComponent} from "./cabecera/cabecera.component";
import {HomeComponent} from "./home/home.component";
import {PieComponent} from "./pie/pie.component";



@NgModule({
  declarations: [CabeceraComponent,
    HomeComponent,
    PieComponent],
  imports: [
    CommonModule,

  ],
  exports:[
    CabeceraComponent,
    HomeComponent,
    PieComponent
  ]
})
export class ComunModule { }
