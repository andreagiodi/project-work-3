import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-nuovo-appuntamento',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './nuovo-appuntamento.component.html',
  styleUrl: './nuovo-appuntamento.component.css'
})
export class NuovoAppuntamentoComponent {
  newAppuntamento = new FormGroup({
    codiceFiscale: new FormControl('',[Validators.required, Validators.minLength(16)]),
    cognome: new FormControl('', [Validators.required]),
    nome: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    telefono: new FormControl<number|null>(null,[Validators.required, Validators.minLength(10)]),
    tempo : new FormGroup({
      data: new FormControl('', [Validators.required]),
      ora: new FormControl('', [Validators.required])
    })
  })

  onSubmit(){
    console.log(this.newAppuntamento.value);
  }

}
