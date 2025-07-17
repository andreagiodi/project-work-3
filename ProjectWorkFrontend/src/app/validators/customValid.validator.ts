/*testing validation function*/
export function invalidControls(form: FormGroup | FormArray, parentKey: string = '') {
  Object.keys(form.controls).forEach(key => {
    const control = form.get(key);
    const fullPath = parentKey ? `${parentKey}.${key}` : key;

    if (control instanceof FormGroup || control instanceof FormArray) {
      invalidControls(control, fullPath);  // Recursive call
    } else if (control && control.invalid) {
      console.warn(`❌ Invalid control: ${fullPath}`, control.errors);
    }
  });
}

/*custom validators to allow form checking*/
import {AbstractControl, FormArray, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

/*passwordMatch for regsisterValidation --> VERIFIED WORKS!*/
export function passwordMatch(): ValidatorFn{
  return (passwords: AbstractControl): ValidationErrors | null =>{
      const {password, confirm} = passwords.value;
      return password === confirm ? null : {passwordMissMatch: true};
  }
}
/*validation for strong password with regex --> VERIFIED WORKS!*/
export function strongPassword():ValidatorFn{
  return (password:AbstractControl):ValidationErrors |null =>{
    /*validates: min 1 UPPERCASE, min 1 lowercase, min 1 digit, min 1 specialChar*/
    const pswdRegex:RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    return pswdRegex.test(password.value) ? null : {weakPassword: true};
  }
}
/*phone number Validation*/
export function phoneNumber():ValidatorFn{
  return (telefono: AbstractControl<string>):ValidationErrors  | null =>{
    /*validates any type of phone numbers ALSO with delimiters such as space, dots, ecc*/
    const phoneRegex:RegExp = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    return phoneRegex.test(telefono.value) ? null : {invalidPhone: true}
  }
}
/*codice fiscale validation*/
export function codiceFiscale():ValidatorFn{
  return (codiceFisc: AbstractControl):ValidationErrors  | null =>{
    /*validates any type of phone numbers ALSO with delimiters such as space, dots, ecc*/
    const CFRegex:RegExp = /^[a-z,A-Z]{6}[0-9]{2}[a-z,A-Z][0-9]{2}[a-z,A-Z][0-9]{3}[a-z,A-Z]$/
    return CFRegex.test(codiceFisc.value) ? null : {invalidCF: true}
  }
}
