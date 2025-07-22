import { Component } from '@angular/core';
import {UtentiAdminComponent} from '../utenti-admin/utenti-admin.component';
import {StoricoUtenteComponent} from './childCmp/utente/childCmp/storico-utente/storico-utente.component';
import {WarningComponent} from './childCmp/utente/childCmp/warning/warning.component';
import {UtenteComponent} from './childCmp/utente/utente.component';
import {User} from '../../modelli/user.model';

@Component({
  selector: 'app-admin-view',
  imports: [
    UtentiAdminComponent,
    StoricoUtenteComponent,
    WarningComponent,
    UtenteComponent
  ],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {
  dataPassed?:User;
  getData(userPassed:User){
    this.dataPassed = userPassed
  }
}
