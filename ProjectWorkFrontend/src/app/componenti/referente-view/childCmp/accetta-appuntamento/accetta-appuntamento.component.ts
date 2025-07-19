import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-accetta-appuntamento',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './accetta-appuntamento.component.html',
  styleUrl: './accetta-appuntamento.component.css'
})
export class AccettaAppuntamentoComponent {
  accettaAppuntamento = new FormGroup({
    data: new FormControl('', [Validators.required]),
    ora: new FormControl('', [Validators.required])
  })
  onSubmit(){
    console.log(this.accettaAppuntamento.value);
  }

}
