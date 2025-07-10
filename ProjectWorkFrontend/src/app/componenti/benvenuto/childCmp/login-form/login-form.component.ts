import {Component, inject} from '@angular/core';
import {AuthService} from '../../../../services/auth-service.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  error ='';

  authService = inject(AuthService);
  onSubmit() {
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value).subscribe({
      next: (response) => {
        console.log('Login successful', response);
      },
      error: (error) => {
        console.error('Login failed', error);
        this.error = 'Login failed. Please check your credentials.';
      }
    });
  }

}
