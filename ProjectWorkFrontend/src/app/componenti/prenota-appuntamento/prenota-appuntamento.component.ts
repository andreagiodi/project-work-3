import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-prenota-appuntamento',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './prenota-appuntamento.component.html',
  styleUrl: './prenota-appuntamento.component.css'
})
export class PrenotaAppuntamentoComponent {
  prenotaAppOspite= new FormGroup({
    data: new FormControl('', [Validators.required]),
    ora: new FormControl('', [Validators.required]),
    professione: new FormControl('', [Validators.required]),
    motivo: new FormControl('', [Validators.required])
  })
  onSubmit(){
    console.log(this.prenotaAppOspite.value);
  }

}
