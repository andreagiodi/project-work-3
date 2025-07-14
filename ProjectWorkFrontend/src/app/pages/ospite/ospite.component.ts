import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PrenotaAppuntamentoComponent} from '../../componenti/prenota-appuntamento/prenota-appuntamento.component';
import {ProssimiAppuntamentiComponent} from '../../componenti/prossimi-appuntamenti/prossimi-appuntamenti.component';


@Component({
  selector: 'app-ospite',
  imports: [
    RouterOutlet,
    PrenotaAppuntamentoComponent,
    ProssimiAppuntamentiComponent,
  ],
  templateUrl: './ospite.component.html',
  styleUrl: './ospite.component.css'
})
export class OspiteComponent {

}
