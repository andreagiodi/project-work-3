import {Component, inject, OnInit} from '@angular/core';
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
export class InternoComponent implements OnInit {
  router = inject(Router);
  authService = inject(AuthService);

  ngOnInit() {
    this.authService.currentUser.subscribe((user: any) => {
      if(user){
        switch (user.idRuolo) {
          case '1':{
            this.router.navigate(['/receptionist']);
            break;
          }
          case '2':{
            this.router.navigate(['/referente']);
            break;
          }
          case '4':{
            this.router.navigate(['/admin']);
            break;
          }
          default: {
            this.router.navigate(['/benvenuto/login']);
            break;
          }
        }
      }
    });
  }
}
