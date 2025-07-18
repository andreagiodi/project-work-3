import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {DashboardService} from '../../services/dashboard-service.service';
import {AuthService} from '../../services/auth-service.service';
import {Router} from '@angular/router';
import {futureDateTimeValidator} from '../../validators/customValid.validator';
import {ValidationErrorService} from '../../validators/validationErrors';
import {Prenotazione} from '../../modelli/user.model';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-prenota-appuntamento',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './prenota-appuntamento.component.html',
  styleUrl: './prenota-appuntamento.component.css'
})
export class PrenotaAppuntamentoComponent{
  /*initialization of component */
  feedBack?: string;
  today: string='';
  constructor(){
    //sets current day to allow date limitations
    this.today = new Date().toISOString().split('T')[0];
  }

  /*services injection*/
  private dashboardService = inject(DashboardService)
  private authService = inject(AuthService);
  private router = inject(Router);

  /*form to book an appointment*/
  prenotaAppOspite= new FormGroup({
    dataOra: new FormGroup({
      data: new FormControl('', [Validators.required]),
      ora: new FormControl('', [Validators.required]),
    },[futureDateTimeValidator()]), //date and time validation
    professione: new FormControl('', [Validators.required]),
    motivo: new FormControl('', [Validators.required]),
  })
  /*returns error message based on passed control*/
  getErrorMessage(controlName: string): string | null {
    const control = this.prenotaAppOspite.get(controlName);
    return ValidationErrorService.getMessage(control!);
  }

  /*map the form data to match Appuntamento custom type*/
  private mapToAppuntamento(): Prenotazione {
    const formData = this.prenotaAppOspite.getRawValue();
    return{
      data: formData.dataOra.data ?? '',
      ora: formData.dataOra.ora ?? '',
      identificazioneProfessionale: formData.professione ?? '',
      motivoVisita: formData.motivo ?? '',
    };
  }

  /*onSubmit sends data to service --> backend*/
  async onSubmit(){
    if(this.authService.isAuthenticated()) {
      if(this.prenotaAppOspite.valid) {
        try{
          const response:Prenotazione = await firstValueFrom(this.dashboardService.createPrenotazione(this.mapToAppuntamento()));
          console.log('Appointment created', response);
          this.feedBack = 'Prenotazione avvenuta con successo, in attesa di accettazione...'
        }catch(error:any){
          console.error('Appointment creation failed', error);
          this.feedBack = 'Prenotazione fallita: '+ error.error;
        }
      }
    }else{
      console.log('Not authenticated!');
      this.router.navigate(['benvenuto/login'],{
        queryParams: { error: 'Non autenticato!' }
      });
    }
  }
}
