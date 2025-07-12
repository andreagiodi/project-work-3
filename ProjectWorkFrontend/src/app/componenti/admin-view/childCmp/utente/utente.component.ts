import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-utente',
  imports: [
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './utente.component.html',
  styleUrl: './utente.component.css'
})
export class UtenteComponent {
  utente = new FormGroup({
    ruolo: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
  onSubmit(){
    console.log(this.utente.value);
  }

}
