import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form-interno',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-form-interno.component.html',
  styleUrl: './register-form-interno.component.css'
})
export class RegisterFormInternoComponent {
  registerInternoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cognome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
  }, {validators: this.passwordMatch})

  passwordMatch(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirm = group.get('newPassword')?.value;

    return password === confirm ? null : {passwordMissMatch: true}
  }
  onSubmit(){
    console.log(this.registerInternoForm.value);
  }
}
