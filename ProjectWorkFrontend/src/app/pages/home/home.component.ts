import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BenvenutoComponent} from '../../componenti/benvenuto/benvenuto.component'

@Component({
  selector: 'app-homepage',
  imports: [
    RouterOutlet,
    BenvenutoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
