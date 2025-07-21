import { Component } from '@angular/core';
import {ProssimiAppuntamentiComponent} from '../prossimi-appuntamenti/prossimi-appuntamenti.component';
import {AccettaAppuntamentoComponent} from './childCmp/accetta-appuntamento/accetta-appuntamento.component';
import {NuovoAppuntamentoComponent} from './childCmp/nuovo-appuntamento/nuovo-appuntamento.component';

@Component({
  selector: 'app-referente-view',
  imports: [
    ProssimiAppuntamentiComponent,
    AccettaAppuntamentoComponent,
    NuovoAppuntamentoComponent
  ],
  templateUrl: './referente-view.component.html',
  styleUrl: './referente-view.component.css'
})
export class ReferenteViewComponent {

}
