import {Component, inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PrenotaAppuntamentoComponent} from '../../componenti/prenota-appuntamento/prenota-appuntamento.component';
import {ProssimiAppuntamentiComponent} from '../../componenti/prossimi-appuntamenti/prossimi-appuntamenti.component';
import {AuthService} from '../../services/auth-service.service';


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
  authService = inject(AuthService);
  /*logout function call*/
  logOutFunc(){
    this.authService.logout();
  }
}
