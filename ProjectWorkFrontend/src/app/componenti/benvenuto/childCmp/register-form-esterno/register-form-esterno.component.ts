import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-register-form-esterno',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-form-esterno.component.html',
  styleUrl: './register-form-esterno.component.css'
})
export class RegisterFormEsternoComponent {

  registerEsternoForm= new FormGroup({
    datiAnagrafici: new FormGroup({
      nome: new FormControl('',[Validators.required]),
      cognome: new FormControl('', [Validators.required]),
      codiceFiscale: new FormControl('',[Validators.required, Validators.minLength(16)]),
    }),
    contatti: new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      telefono: new FormControl<number|null>(null,[Validators.required, Validators.minLength(10)])
    }),
    azienda: new FormControl('',[Validators.required]),

    passwords: new FormGroup({
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      newPassword: new FormControl ('',[Validators.required, Validators.minLength(6)])
    }, {validators: this.passwordMatch})
  })

  passwordMatch(group:AbstractControl){
    const password = group.get('password')?.value;
    const confirm = group.get('newPassword')?.value;

    return password===confirm ? null : { passwordMissMatch : true}
  }

  onSubmit(){
    console.log(this.registerEsternoForm.value);
  }
}
