import {Component, inject} from '@angular/core';
import {ProssimiAppuntamentiComponent} from '../prossimi-appuntamenti/prossimi-appuntamenti.component';
import {StoricoOspiteComponent} from './childCmp/info-ospite/childCmp/storico-ospite/storico-ospite.component';
import {InfoOspiteComponent} from './childCmp/info-ospite/info-ospite.component';
import {Ospite, Prenotazione} from '../../modelli/user.model';
import {firstValueFrom} from 'rxjs';
import {DashBoardService} from '../../services/dashboard-service.service';
@Component({
  selector: 'app-receptionist-view',
  imports: [
    ProssimiAppuntamentiComponent,
    StoricoOspiteComponent,
    InfoOspiteComponent,
  ],
  templateUrl: './receptionist-view.component.html',
  styleUrl: './receptionist-view.component.css'
})
export class ReceptionistViewComponent {
  /*service injection*/
  private dashboardService = inject(DashBoardService);

  //get the selected user and prenotazione from the outputted event
  selectedUser: Ospite|null = null;
  selectedPrenotazione: Prenotazione|null= null;

  //get prenotazione as input and extract user info
  async getEntryData(prenotazione: Prenotazione){
    this.selectedPrenotazione = prenotazione;
    await firstValueFrom(this.dashboardService.getOspiteInfo(prenotazione.idOspite)).then((user) =>{
      this.selectedUser = <Ospite|null>user;
    });
  }
  //get form data from custom output event
  async getFormData(formData:{ore:{entrata:boolean|null, uscita:boolean|null}, note:string|null}){
    const entrata = formData.ore.entrata;
    if(entrata) {
      const resposne = await firstValueFrom(this.dashboardService.setEntrataOspite(this.selectedPrenotazione?.id!));
      console.log('Entrata sent', resposne);
    }
    const uscita = formData.ore.uscita;
    if(uscita) {
     const response = await firstValueFrom(this.dashboardService.setUscitaOspite(this.selectedPrenotazione?.id!));
      console.log('Uscita sent', response);
    }
    const note = formData.note;
    if(note != ''){
      /*something with notes...not implemented*/
      console.log('Note sent');
    }
  }
}
