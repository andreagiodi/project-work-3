import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DashboardServiceService } from '../../services/dashboard-service.service';

@Component({
  selector: 'app-dashboard-ospite',
  imports: [FormsModule],
  templateUrl: './dashboard-ospite.component.html',
  styleUrl: './dashboard-ospite.component.css'
})
export class DashboardOspiteComponent {
  data!: Date;
  ora!:  Date;
  identificazioneProfessionale: string = "";
  motivoVisita: string = "";
  error: string = "";

  dashboardService = inject(DashboardServiceService)

  onSubmit() {
    this.dashboardService.createPrenotazione().subscribe({
      next: (response) => {
        console.log('creation successful', response);
      },
      error: (error) => {
        console.error('creation failed', error);
        this.error = 'creation failed.';
      }
    });
  }
}
