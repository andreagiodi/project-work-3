import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RegisterService} from '../../../../services/register-service.service';

/*importing validators*/
import {
  codiceFiscale,
  passwordMatch,
  phoneNumber,
  strongPassword,
} from '../../../../validators/customValid.validator';
import {Ospite} from '../../../../modelli/user.model';
import {ValidationErrorService} from '../../../../validators/validationErrors';

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

  /*FORM*/
  registerEsternoForm = new FormGroup({
    datiAnagrafici: new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cognome: new FormControl('', [Validators.required]),
      codiceFiscale: new FormControl('', [Validators.required, codiceFiscale()]),
    }),
    contatti: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl<string>('', [Validators.required, Validators.minLength(10), phoneNumber()])
    }),
    info: new FormGroup({
      azienda: new FormControl('', [Validators.required]),
      tipoOspite: new FormControl('', [Validators.required]),
    }),

    passwords: new FormGroup({
      password: new FormControl('', [Validators.required, strongPassword()]), //custom Validator for strong pswd
      confirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, {validators: passwordMatch()}) //match both passwords to validate
  });

  /*map the form data to match Ospite custom type*/
  private mapToOspite(): Ospite {
    const formData = this.registerEsternoForm.getRawValue();
    return {
      userType: 'ospite',
      nome: formData.datiAnagrafici.nome ?? '',
      cognome: formData.datiAnagrafici.cognome ?? '',
      codiceFiscale: formData.datiAnagrafici.codiceFiscale ?? '',
      email: formData.contatti.email ?? '',
      telefono: formData.contatti.telefono ?? '',
      password: formData.passwords.password ?? '',
      azienda: formData.info.azienda ?? '',
      idTipoOspite: Number(formData.info.tipoOspite), // ensure it's a number
    };
  }

  /*submit register Form logic*/
  onSubmit() {
    if (this.registerEsternoForm.valid) {
      //call register passing mapped form
      this.registrationService.register(this.mapToOspite());
    }
  }

  /*returns error message based on passed control*/
  getErrorMessage(controlName: string): string | null {
    const control = this.registerEsternoForm.get(controlName);
    return ValidationErrorService.getMessage(control!);
  }
}
