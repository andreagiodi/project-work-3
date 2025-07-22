import {Component, inject, OnInit, signal} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {AuthService} from '../../services/auth-service.service';
import {Impiegato, User} from '../../modelli/user.model';

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
  currentUser: Impiegato | null = null;
  ngOnInit() {
    this.currentUser = <Impiegato>this.authService.getCurrentUser()();
    this.redirectUser(this.currentUser);
  }

  redirectUser(user: User | null) {
    if(user?.userType === 'impiegato')
      switch (user.idRuolo) {
        case 1: {
          this.router.navigate(['interno/admin']);
          break;
        }
        case 2: {
          this.router.navigate(['interno/receptionist']);
          break;
        }
        case 3: {
          this.router.navigate(['interno/referente']);
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
      console.log('Access restricted to employee only');
      this.router.navigate(['benvenuto/login'], {
        queryParams: { error: 'Accesso ristretto ad impiegati' }
      });
    }
    if(!user){
      this.router.navigate(['benvenuto/login'], {
        queryParams: { error: "Non hai ancora effettuato l'accesso" }
      });
    }
  }

  /*logout function call*/
  logOutFunc(){
    this.authService.logout();
  }
  //flag to show currentUser info
  isShowingUser = signal(false)
  //invert state with toggle
  toggleUserInfo(){
    this.isShowingUser.set(!this.isShowingUser());
  }
}
