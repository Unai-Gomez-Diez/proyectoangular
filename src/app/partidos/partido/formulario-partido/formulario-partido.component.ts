import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario-partido',
  templateUrl: './formulario-partido.component.html',
  styleUrl: './formulario-partido.component.css'
})
export class FormularioPartidoComponent {
  resultado!: string

  constructor(private fb: FormBuilder) {
  }
  formulario = this.fb.group({
    local: ["",Validators.required],
    visitante: ["",Validators.required],
    fecha:["",Validators.required],
    hora:["", Validators.required]
  })
  submit(){

  }
}
