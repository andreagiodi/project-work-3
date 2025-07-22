import {Component, input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {User} from '../../../../modelli/user.model';

@Component({
  selector: 'app-utente',
  imports: [
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

  dataPassed = input<User>();
}
