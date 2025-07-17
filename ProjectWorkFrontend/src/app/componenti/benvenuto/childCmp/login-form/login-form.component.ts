import {Component, inject} from '@angular/core';
import {AuthService} from '../../../../services/auth-service.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {firstValueFrom} from 'rxjs';
import {ValidationErrorService} from '../../../../validators/validationErrors';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent{

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
  })

  /*login handling*/
  authService = inject(AuthService); //authService injection
  loginError = '';

  /*on Submit*/
  async onSubmit() {
    /*checks if form valid, if not then return error message*/
    if (this.loginForm.invalid) {
      this.loginError = 'Credenziali inserite non valide';
      return;
    }
    /*try to wait for a response, using firstValueFrom to only get one call and one answer*/
    try{
      const response = await firstValueFrom(this.authService.login(this.loginForm.getRawValue()));
      console.log('Login successful', response);
      this.loginError = '';
      this.authService.loadUser();
    } catch (error:any) {
      console.error('Login failed', error);
      this.loginError = 'Login fallito: '+error.error;
    }
  }

  getErrorMessage(controlName: string): string | null {
    const control = this.loginForm.get(controlName);
    return ValidationErrorService.getMessage(control!);
  }
}
