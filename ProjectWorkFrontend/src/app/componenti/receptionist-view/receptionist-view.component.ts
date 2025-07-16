import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProssimiAppuntamentiComponent} from '../prossimi-appuntamenti/prossimi-appuntamenti.component';
@Component({
  selector: 'app-receptionist-view',
  imports: [
    RouterOutlet,
    ProssimiAppuntamentiComponent,
  ],
  templateUrl: './receptionist-view.component.html',
  styleUrl: './receptionist-view.component.css'
})
export class ReceptionistViewComponent {

}
