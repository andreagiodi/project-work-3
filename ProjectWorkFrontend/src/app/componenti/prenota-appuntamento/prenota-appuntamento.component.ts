import {Component, computed, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {DashboardService} from '../../services/dashboard-service.service';
import {AuthService} from '../../services/auth-service.service';
import {Router} from '@angular/router';
import {futureDateTimeValidator} from '../../validators/customValid.validator';
import {ValidationErrorService} from '../../validators/validationErrors';

@Component({
  selector: 'app-prenota-appuntamento',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './prenota-appuntamento.component.html',
  styleUrl: './prenota-appuntamento.component.css'
})
export class PrenotaAppuntamentoComponent {
  /*services injection*/
  private dashboardService = inject(DashboardService)
  private authService = inject(AuthService);
  private router = inject(Router);

  today = new Date().toISOString().split('T')[0];

  prenotaAppOspite= new FormGroup({
    dataOra: new FormGroup({
      data: new FormControl('', [Validators.required]),
      ora: new FormControl('', [Validators.required]),
    },[futureDateTimeValidator()]),
    professione: new FormControl('', [Validators.required]),
    motivo: new FormControl('', [Validators.required]),
  })
  onSubmit(){
    const currentUser= computed(()=>{
      return this.authService.getCurrentUser();
    });
    if(this.authService.isAuthenticated()) {
      console.log(this.prenotaAppOspite.value, currentUser());
      this.dashboardService.createPrenotazione()
    }else{
      console.log('Not authenticated!');
      this.router.navigate(['benvenuto/login']);
    }
  }
  /*returns error message based on passed control*/
  getErrorMessage(controlName: string): string | null {
    const control = this.prenotaAppOspite.get(controlName);
    return ValidationErrorService.getMessage(control!);
  }
}
