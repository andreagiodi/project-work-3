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
          console.log('account not yet activated...redirect to login page');
          this.router.navigate(['benvenuto/login'],{
            queryParams: { error: 'Account non ancora attivato' }
          });
          break;
        }
      }
    else{
      console.log('restricted to employee only');
      this.router.navigate(['benvenuto/login'], {
        queryParams: { error: 'Accesso negato' }
      });
    }
  }

  /*logout function call*/
  logOutFunc(){
    this.authService.logout();
  }
}
