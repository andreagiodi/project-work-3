import {Component, inject, OnDestroy} from '@angular/core';
import {AuthService} from '../../../../services/auth-service.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {firstValueFrom, Subscription} from 'rxjs';

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

  async onSubmit() {
    if (this.loginForm.invalid) {
      this.loginError = 'Credenziali non valide';
      return;
    }

    try {
      const response = await firstValueFrom(this.authService.login(this.loginForm.getRawValue()));
      console.log('Login successful', response);
      this.authService.loadUser(); // Consider awaiting this if modified
    } catch (error) {
      console.error('Login failed', error);
      this.loginError = 'Login failed. Please check your credentials.';
    }
  }
}
