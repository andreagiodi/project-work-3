import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PrenotaAppuntamentoComponent} from '../../componenti/prenota-appuntamento/prenota-appuntamento.component';
import {ProssimiAppuntamentiComponent} from '../../componenti/prossimi-appuntamenti/prossimi-appuntamenti.component';
import {RichiesteSospesoComponent} from '../../componenti/richieste-sospeso/richieste-sospeso.component';
import {
  ElencoSospesoComponent
} from '../../componenti/richieste-sospeso/childCmp/elenco-sospeso/elenco-sospeso.component';

@Component({
  selector: 'app-ospite',
  imports: [
    RouterOutlet,
    PrenotaAppuntamentoComponent,
    ProssimiAppuntamentiComponent,
    RichiesteSospesoComponent,
    ElencoSospesoComponent
  ],
  templateUrl: './ospite.component.html',
  styleUrl: './ospite.component.css'
})
export class OspiteComponent {

}
