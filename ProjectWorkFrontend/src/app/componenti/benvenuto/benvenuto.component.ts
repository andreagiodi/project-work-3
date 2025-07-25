import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AuthService} from '../../services/auth-service.service';

@Component({
  selector: 'app-benvenuto',
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './benvenuto.component.html',
  styleUrl: './benvenuto.component.css'
})
export class BenvenutoComponent {
  private authService = inject(AuthService);
  /*note for Luck: add the redirect to user page if cookie exist*/
}
