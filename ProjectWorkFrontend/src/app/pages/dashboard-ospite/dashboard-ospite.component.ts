import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  onSubmit() {

  }
}
