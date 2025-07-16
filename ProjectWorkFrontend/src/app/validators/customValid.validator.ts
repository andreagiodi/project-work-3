/*custom validators to allow form checking*/
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

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

export function phoneNumber():ValidatorFn{
  return (telefono: AbstractControl):ValidationErrors  | null =>{
    /*validates any type of phone numbers ALSO with delimiters such as space, dots, ecc*/
    const phoneRegex:RegExp = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    return phoneRegex.test(telefono.value) ? null : {invalidPhone: true}
  }
}
