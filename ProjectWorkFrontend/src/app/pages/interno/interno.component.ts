import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {AuthService} from '../../services/auth-service.service';
import {User} from '../../modelli/user.model';

@Component({
  selector: 'app-interno',
  imports: [
    RouterOutlet
  ],
  templateUrl: './interno.component.html',
  styleUrl: './interno.component.css'
})
export class InternoComponent implements OnInit {
  router = inject(Router);
  authService = inject(AuthService);
  currentUser: User | null = null;
  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser()
    this.redirectUser(this.currentUser);
  }

  redirectUser(user: User | null) {
    if(user?.userType === 'impiegato')
      switch (user.idRuolo) {
        case 1: {
          this.router.navigate(['interno/receptionist']);
          break;
        }
        case 2: {
          this.router.navigate(['interno/referente']);
          break;
        }
        case 4: {
          this.router.navigate(['interno/admin']);
          break;
        }
        default: {
          this.router.navigate(['benvenuto/login']);
        }
      }
    else{
      this.router.navigate(['benvenuto/login']);
    }
  }

  /*logout function call*/
  logOutFunc(){
    this.authService.logout();
  }
}
