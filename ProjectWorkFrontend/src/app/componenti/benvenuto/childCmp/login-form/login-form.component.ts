import {Component, inject, OnDestroy} from '@angular/core';
import {AuthService} from '../../../../services/auth-service.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnDestroy {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })
  error ='';

  /*login handling*/
  subscription?: Subscription; //save subscription reference
  authService = inject(AuthService); //authService injection

  onSubmit() {
    this.subscription?.unsubscribe(); //safety unsubscribe

    //subscribe and save reference for unsubscribing
    this.subscription= this.authService.login(this.loginForm).subscribe({
      //handle successful
      next: (response) => {
        console.log('Login successful', response);
        this.authService.loadUser();
      },
      //error handling
      error: (error) => {
        console.error('Login failed', error);
        this.error = 'Login failed. Please check your credentials.';
      }
    });
  }

  /*onDestroy unsubscribe to avoid data leak*/
  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
