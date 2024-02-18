import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GestorPartidosService} from "../../../Servicios/gestor-partidos.service";
import {Gol, Partido} from "../../../data/partido";
import {Router, Routes} from "@angular/router";

@Component({
  selector: 'app-formulario-partido',
  templateUrl: './formulario-partido.component.html',
  styleUrl: './formulario-partido.component.css'
})
export class FormularioPartidoComponent {
  resultado!: string
  partido: Partido= {
    idPartido: '',
    idLocal: '',
    idVisitante: '',
    fechaHora: '',
    goles: [],
    tarjetas: []
  };
  constructor(private fb: FormBuilder, private service: GestorPartidosService, private route: Router) {

  }
  formulario = this.fb.group({
    local: ["",Validators.required],
    visitante: ["",Validators.required],
    fecha:["",Validators.required],
    hora:["", Validators.required]
  })
  submit(){
    this.partido.idLocal = <string>this.formulario.value.local
    this.partido.idVisitante = <string>this.formulario.value.visitante
    this.partido.fechaHora = <string>this.formulario.value.fecha + this.formulario.value.hora
    this.service.modPartidos(this.partido)
    this.route.navigate(["/partidos"])
  }
}
