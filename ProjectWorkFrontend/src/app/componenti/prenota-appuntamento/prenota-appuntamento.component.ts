import {Component, computed, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {DashboardService} from '../../services/dashboard-service.service';
import {AuthService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

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
  private router = inject(Router);

  prenotaAppOspite= new FormGroup({
    data: new FormControl('', [Validators.required]),
    ora: new FormControl('', [Validators.required]),
    professione: new FormControl('', [Validators.required]),
    motivo: new FormControl('', [Validators.required]),
  })
  onSubmit(){
    const currentUser= computed(()=>{
      return this.authService.getCurrentUser();
    });
    if(this.authService.isAuthenticated()) {
      console.log(this.prenotaAppOspite.value, currentUser());
      this.dashboardService.createPrenotazione(this.prenotaAppOspite)
    }else{
      console.log('Not authenticated!');
      this.router.navigate(['benvenuto/login']);
    }
  }

}
