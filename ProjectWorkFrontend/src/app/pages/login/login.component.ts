import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth-service.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = "";
  password: string = "";
  error: string = "";

  authService = inject(AuthService);

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Salva il token in localStorage
        // localStorage.setItem('token', response.token);
        // Redirect alla home o dashboard
      },
      error: (error) => {
        console.error('Login failed', error);
        this.error = 'Login failed. Please check your credentials.';
      }
    });
  }
}