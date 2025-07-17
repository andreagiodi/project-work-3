import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';
import {apiURL} from '../app.config';
import {Router} from '@angular/router';
import {Impiegato, Ospite, User} from '../modelli/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) {}

  registerEsterno(dataOspite: Ospite): Observable<any> {
    /*destructuring the data received as input*/
    const {
      nome,
      cognome,
      email,
      password,
      telefono,
      codiceFiscale,
      azienda,
      idTipoOspite
    } = dataOspite;
    console.log(dataOspite);
    console.log(nome, cognome, email, password, telefono, codiceFiscale, azienda, idTipoOspite);
    /*calling API for register*/
    return this.http.post(`${apiURL}/register/ospite`, {
      nome,
      cognome,
      email,
      password,
      telefono,
      codiceFiscale,
      azienda,
      idTipoOspite,
    }, {withCredentials: true});
  }

  registerInterno(dataStaff: Impiegato): Observable<any> {
    /*destructuring the data received as input*/
    const {
      email,
      password,
      nome,
      cognome,
      isEsterno
    } = dataStaff;
    /*calling API for register*/
    return this.http.post(`${apiURL}/register/staff`, {
      email,
      password,
      nome,
      cognome,
      isEsterno,
    }, {withCredentials: true});
  }

  /*general registration for both types of users*/
  errorMessage: string = 'ops, qualcosa è andato storto';
  registerError: unknown;

  async register(formData: User) {
    if (formData.userType === 'impiegato') {
      //register interno staff
      console.log('registrazione interno in corso....')
      /*try for a response*/
      try {
        const response = await firstValueFrom(this.registerInterno(formData));
        console.log('Register successful', response);
        this.redirectUser();
      }catch (error) {
        console.error("Registration error: ", error);
        this.registerError = error;
      }
    } else {
      //register esterno opsite
      console.log('registrazione esterno in corso....')
      /*try for a response*/
      try {
        const response = await firstValueFrom(this.registerEsterno(formData)); //await response
        console.log('Register successful', response); //give response
        this.redirectUser();
      }catch (error) {
        console.error("Registration error: ", error);
        this.registerError = error;
      }
    }
  }

  /*redirect user once registration success*/
  private redirectUser= ():void => {
    //redirect to login page
    this.router.navigate(['/benvenuto/login']);
    return;
  }
}
