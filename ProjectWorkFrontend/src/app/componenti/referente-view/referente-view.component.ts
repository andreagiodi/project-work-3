import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProssimiAppuntamentiComponent} from '../prossimi-appuntamenti/prossimi-appuntamenti.component';

@Component({
  selector: 'app-referente-view',
  imports: [
    RouterOutlet,
    ProssimiAppuntamentiComponent
  ],
  templateUrl: './referente-view.component.html',
  styleUrl: './referente-view.component.css'
})
export class ReferenteViewComponent {

}
