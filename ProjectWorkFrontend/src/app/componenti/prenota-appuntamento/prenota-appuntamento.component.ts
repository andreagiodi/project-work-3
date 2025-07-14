import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {DashboardService} from '../../services/dashboard-service.service';
import {AuthService} from '../../services/auth-service.service';

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
  private dashboardService = inject(DashboardService)
  private authService = inject(AuthService);

  prenotaAppOspite= new FormGroup({
    data: new FormControl('', [Validators.required]),
    ora: new FormControl('', [Validators.required]),
    professione: new FormControl('', [Validators.required]),
    motivo: new FormControl('', [Validators.required]),
  })
  onSubmit(){
    const currentUser = this.authService.currentUser;
    console.log(this.prenotaAppOspite.value);
    this.dashboardService.createPrenotazione(this.prenotaAppOspite)
  }

}
