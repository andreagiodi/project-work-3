import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private apiUrl = 'http://localhost:8080';

  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password }, { withCredentials: true });
  }

  checkAuth(): Observable<any> {
    return this.http.get(`${this.apiUrl}/auth/me`, { withCredentials: true }).pipe(
      catchError(() => of(null))
    );
  }

  loadUser() {
    this.checkAuth().subscribe(user => {
      this.userSubject.next(user);

      if (user) {
        
        if (user.userType === 'impiegato') {
          this.router.navigate(['/dashboard']);
        } else if (user.userType === 'ospite') {
          this.router.navigate(['/dashboard-ospite']);
        }
      } else {
        this.router.navigate(['/']);
      }
    });

  }

  get currentUser() {
    return this.userSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}