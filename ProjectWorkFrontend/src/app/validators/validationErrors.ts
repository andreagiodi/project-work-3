import {AbstractControl} from '@angular/forms';

/*Validation messages valid across all forms*/
export class ValidationErrorService{
  /*extract error messge*/
  static getMessage(control: AbstractControl): string | null {
    if (!control || !control.errors) return null;
    /*list of all errors from the form checked*/
    const errors = control.errors;
    /* */
    if (errors['required']) return 'Questo campo è obbligatorio';
    if (errors['email']) return 'Indirizzo email non valido';
    if (errors['minlength'])
      return `La minima lunghezza è ${errors['minlength'].requiredLength}`;
    if (errors['maxlength'])
      return `La massima lunghezza consentita è ${errors['maxlength'].requiredLength}`;
    if (errors['passwordMissMatch']) return "Le due password inserite non corrispondono";
    if (errors['weakPassword']) return "La password è troppo debole";
    if (errors['invalidPhone']) return "Il numero di telefono non è valido";
    if (errors['invalidCF']) return "Codice Fiscale non valido";

    return 'Invalid field';
  }
}
