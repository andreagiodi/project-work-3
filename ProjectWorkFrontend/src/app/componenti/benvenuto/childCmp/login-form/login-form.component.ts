import {Component, inject} from '@angular/core';
import {AuthService} from '../../../../services/auth-service.service';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {firstValueFrom} from 'rxjs';
import {ValidationErrorService} from '../../../../validators/validationErrors';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent{

  constructor(private activatedRoute: ActivatedRoute,) {
    /*get an error message from query params*/
    this.activatedRoute.queryParams.subscribe(params => {
      if(params['success']){
        this.loginMessage = params['success'];
      }else if(params['error']){
        this.loginMessage = params['error'];
      }
    })
  }
  loginMessage: string | undefined; //handles message passed through query params

  /*create the loginForm*/
  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.minLength(6)]),
  })

  /*login handling*/
  authService = inject(AuthService); //authService injection

  /*on Submit*/
  async onSubmit() {
    /*checks if form valid, if not then return error message*/
    if (this.loginForm.invalid) {
      this.loginMessage = 'Credenziali inserite non valide';
      return;
    }
    /*try to wait for a response, using firstValueFrom to only get one call and one answer*/
    try{
      const response = await firstValueFrom(this.authService.login(this.loginForm.getRawValue()));
      console.log('Login successful', response);
      this.loginMessage = '';
      this.authService.loadUser();
    } catch (error:any) {
      console.error('Login failed', error);
      this.loginMessage = 'Login fallito: '+error.error;
    }
  }
  /*error handling, shows a message on template (see @if block) */
  getErrorMessage(controlName: string): string | null {
    const control = this.loginForm.get(controlName);
    return ValidationErrorService.getMessage(control!);
  }
}
