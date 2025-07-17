import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  authService = inject(AuthService);
  /*checks if user has already logged in (through cookies)*/
  ngOnInit() {
    if(this.authService.isAuthenticated()){
      this.authService.loadUser()
    }
  }
}
