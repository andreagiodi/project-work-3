import {Component, inject, OnDestroy} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RegisterService} from '../../../../services/register-service.service';

@Component({
  selector: 'app-register-form-interno',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-form-interno.component.html',
  styleUrl: './register-form-interno.component.css'
})
export class RegisterFormInternoComponent implements OnDestroy {
  /*inject register service*/
  registrationService = inject(RegisterService)

  registerInternoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cognome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tipoStaff: new FormControl<boolean>(false),
    passwords: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      newPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  })
  /*submit register Form logic*/
  onSubmit(){
    if(this.registerInternoForm.valid) {
      //safety unsubscribe in case it already exists
      this.registrationService.unRegister();
      //call register for subscription
      this.registrationService.register(this.registerInternoForm, true);
    }
  }
  //safety unsubscribe
  ngOnDestroy() {
    this.registrationService.unRegister()
  }
}
