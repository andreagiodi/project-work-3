import { Component } from '@angular/core';
import {ElencoSospesoComponent} from './childCmp/elenco-sospeso/elenco-sospeso.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-richieste-sospeso',
  imports: [
    RouterOutlet
  ],
  templateUrl: './richieste-sospeso.component.html',
  styleUrl: './richieste-sospeso.component.css'
})
export class RichiesteSospesoComponent {

}
