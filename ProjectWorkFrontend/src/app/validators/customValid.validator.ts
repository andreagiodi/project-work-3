/*custom validators to allow form checking*/
import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

/*passwordMatch for regsisterValidation --> VERIFIED WORKS!*/
export function passwordMatch(): ValidatorFn{
  return (passwords: AbstractControl): ValidationErrors | null =>{
      const {password, confirm} = passwords.getRawValue();
      return password === confirm ? null : {passwordMissMatch: true};
  }
}
/*validation for strong password with regex --> VERIFIED WORKS!*/
export function strongPassword():ValidatorFn{
  return (password:AbstractControl):ValidationErrors |null =>{
    /*validates: min 1 UPPERCASE, min 1 lowercase, min 1 digit, min 1 specialChar*/
    const pswdRegex:RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/;
    return pswdRegex.test(password.getRawValue()) ? null : {weakPassword: true};
  }
}
