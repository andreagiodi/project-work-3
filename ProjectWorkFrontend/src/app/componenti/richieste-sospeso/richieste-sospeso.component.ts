import { Component } from '@angular/core';
import {ElencoSospesoComponent} from './childCmp/elenco-sospeso/elenco-sospeso.component';

@Component({
  selector: 'app-richieste-sospeso',
  imports: [
    ElencoSospesoComponent
  ],
  templateUrl: './richieste-sospeso.component.html',
  styleUrl: './richieste-sospeso.component.css'
})
export class RichiesteSospesoComponent {

}
