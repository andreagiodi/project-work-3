import {Component, inject} from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RegisterService} from '../../../../services/register-service.service';

/*importing validators*/
import {passwordMatch, strongPassword} from '../../../../validators/customValid.validator';
import {Impiegato} from '../../../../modelli/user.model';
import {ValidationErrorService} from '../../../../validators/validationErrors';

@Component({
  selector: 'app-register-form-interno',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register-form-interno.component.html',
  styleUrl: './register-form-interno.component.css'
})
export class RegisterFormInternoComponent{
  /*inject register service*/
  registrationService = inject(RegisterService)

  registerInternoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cognome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    tipoStaff: new FormControl<boolean>(false),
    passwords: new FormGroup({
      password: new FormControl('', [Validators.required, strongPassword()]), //custom validator for strong pswd
      confirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, {validators: passwordMatch()}) // match both passwords to validate
  })

  /*map the form data to match Impiegato custom type*/
  private mapToImpiegato(): Impiegato {
    const formData = this.registerInternoForm.getRawValue();
    return {
      userType: 'impiegato',
      nome: formData.nome ?? '',
      cognome: formData.cognome ?? '',
      email: formData.email ?? '',
      isEsterno: formData.tipoStaff ?? false,
      idRuolo: 1, //for convenience set default role 1 as receptionist for now
      password: formData.passwords.password ?? '',
    };
  }

  /*submit register Form logic*/
  onSubmit(){
    if(this.registerInternoForm.valid) {
      //call register passing mapped form
      this.registrationService.register(this.mapToImpiegato());
    }
  }

  /*returns error message based on passed control*/
  getErrorMessage(controlName: string): string | null {
    const control = this.registerInternoForm.get(controlName);
    return ValidationErrorService.getMessage(control!);
  }
}
