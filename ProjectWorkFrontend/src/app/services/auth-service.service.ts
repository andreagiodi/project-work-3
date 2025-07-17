import {Injectable, computed, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, catchError, of, take} from 'rxjs';
import {Router} from '@angular/router';
import {apiURL} from '../app.config';
import {User, LoginRequest} from '../modelli/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //current logged user
  private user = signal<User | null>(null);
  //flag for authenticated, false = not authed true = authed
  isAuthenticated = computed(() => !!this.checkAuth());

  constructor(private http: HttpClient, private router: Router) {
  }

  /*send a POST request for login, passing a custom LoginRequest type, defined in user.model */
  login(credentials: LoginRequest): Observable<User> {
    return this.http.post<User>(`${apiURL}/login`, credentials, {withCredentials: true});
  }

  /*sends a POST request to logout endpoint, also setting user back to Null and redirect to login page*/
  logout(): void {
    this.http.post(`${apiURL}/logout`, {}, {withCredentials: true}).subscribe({
      next: () => {
        this.user.set(null);
        this.redirectUser(null)
      },
      error: () => {
        // fallback in case logout endpoint fails
        this.user.set(null);
        this.router.navigate(['/benvenuto/login']);
      }
    });
  }

  /*check user token*/
  checkAuth(): Observable<User | null> {
    return this.http.get<User>(`${apiURL}/auth/me`, {withCredentials: true})
      .pipe(catchError(() => of(null)));
  }

  /*load user handles the current user set / redirect to correct page*/
  loadUser() {
    this.checkAuth().pipe(take(1)).subscribe(user => {
      this.user.set(user); // set logged user
      this.redirectUser(user); //external method handles redirect
    });
  }

  /*redirect user function*/
  private redirectUser(user: User | null): void {
    //if user is null or not logged in, redirect to login page
    if (!user) {
      this.router.navigate(['/benvenuto/login']);
      return;
    }
    //define a map to allow redirecting based on userType
    const routeMap = {
      impiegato: '/interno',
      ospite: '/esterno'
    };
    //user redirection
    this.router.navigate([routeMap[user.userType]]);
  }

  getCurrentUser() {
    return this.user();
  }
}
