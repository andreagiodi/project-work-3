import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { Router } from '@angular/router';
import { apiURL } from '../app.config';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(loginForm : FormGroup): Observable<any> {
    const email :string =loginForm.get('email')?.value;
    const password :string = loginForm.get('password')?.value;
    return this.http.post(`${apiURL}/login`, { email, password }, { withCredentials: true });
  }

  checkAuth(): Observable<any> {
    return this.http.get(`${apiURL}/auth/me`, { withCredentials: true }).pipe(
      catchError(() => of(null))
    );
  }

  loadUser() {
    this.checkAuth().subscribe(user => {
      this.userSubject.next(user);
      if (user) {
        if (user.userType === 'impiegato') {
          this.router.navigate(['/interno']);
        } else if (user.userType === 'ospite') {
          this.router.navigate(['/esterno']);
        }
      } else {
        this.router.navigate(['/benvenuto/login']);
      }
    });

  }

  /*return current User logged*/
  get currentUser() {
    return this.user$;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
