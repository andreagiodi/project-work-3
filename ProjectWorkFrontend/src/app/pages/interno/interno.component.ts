import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {AuthService} from '../../services/auth-service.service';

@Component({
  selector: 'app-interno',
  imports: [
    RouterOutlet
  ],
  templateUrl: './interno.component.html',
  styleUrl: './interno.component.css'
})
export class InternoComponent{
  router = inject(Router);
  authService = inject(AuthService);
  /*logout function call*/
  logOutFunc(){
    this.authService.logout();
  }
}
