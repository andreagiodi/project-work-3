import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProssimiAppuntamentiComponent} from '../prossimi-appuntamenti/prossimi-appuntamenti.component';
import {StoricoOspiteComponent} from './childCmp/info-ospite/childCmp/storico-ospite/storico-ospite.component';
import {InfoOspiteComponent} from './childCmp/info-ospite/info-ospite.component';
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

}
