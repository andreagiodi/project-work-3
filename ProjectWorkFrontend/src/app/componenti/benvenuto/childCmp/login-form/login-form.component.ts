import {Component, inject} from '@angular/core';
import {AuthService} from '../../../../services/auth-service.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email: string = "";
  password: string = "";
  error: string = "";

  authService = inject(AuthService);

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
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
