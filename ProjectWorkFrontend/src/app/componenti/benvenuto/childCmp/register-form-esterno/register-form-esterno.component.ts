import {Component, inject} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RegisterService} from '../../../../services/register-service.service';

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
  /*injecting register service*/
  registrationService = inject(RegisterService)

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
    tipoOspite: new FormControl('',[Validators.required]),

    passwords: new FormGroup({
      password: new FormControl('',[Validators.required, Validators.minLength(6)]),
      newPassword: new FormControl ('',[Validators.required, Validators.minLength(6)])
    }, {validators: this.registrationService.passwordMatch})
  })

  /*submit form logic*/
  onSubmit(){
    console.log(this.registerEsternoForm.value);
    if(this.registerEsternoForm.valid){
      this.registrationService.registerEsterno(this.registerEsternoForm)
    }
  }
}
