import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UtentiAdminComponent} from '../utenti-admin/utenti-admin.component';
import {UtenteComponent} from './childCmp/utente/utente.component';
import {StoricoUtenteComponent} from './childCmp/utente/childCmp/storico-utente/storico-utente.component';
import {WarningComponent} from './childCmp/utente/childCmp/warning/warning.component';

@Component({
  selector: 'app-admin-view',
  imports: [
    RouterOutlet,
    UtentiAdminComponent,
    UtenteComponent,
    StoricoUtenteComponent,
    WarningComponent
  ],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {

}
