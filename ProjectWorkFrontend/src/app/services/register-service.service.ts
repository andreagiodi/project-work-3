import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AbstractControl, FormGroup} from '@angular/forms';
import {apiURL} from '../app.config';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient, private router: Router) {
  }

  passwordMatch(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirm = group.get('newPassword')?.value;

    return password === confirm ? null : {passwordMissMatch: true}
  }

  registerEsterno(formData: FormGroup): Observable<any> {
    const nome: string = formData.get('datiAnagrafici')?.get('nome')?.value;
    const cognome: string = formData.get('datiAnagrafici')?.get('cognome')?.value;
    const codiceFiscale: string = formData.get('datiAnagrafici')?.get('codiceFiscale')?.value;
    const email: string = formData.get('contatti')?.get('email')?.value;
    const telefono: number = formData.get('contatti')?.get('telefono')?.value;
    const azienda: string = formData.get('azienda')?.value;
    const idTipoOspite: number = formData.get('tipoOspite')?.value;
    const password: string = formData.get('passwords')?.get('password')?.value;

    return this.http.post(`${apiURL}/register/staff`, {
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

  registerInterno(formData: FormGroup): Observable<any> {
    const nome: string = formData.get('nome')?.value;
    const cognome: string = formData.get('cognome')?.value;
    const email: string = formData.get('email')?.value;
    const isEsterno: boolean = formData.get('tipoStaff')?.value;
    const password: string = formData.get('passwords')?.get('password')?.value;

    return this.http.post(`${apiURL}/register/staff`, {
      email,
      password,
      nome,
      cognome,
      isEsterno,
    }, {withCredentials: true});
  }

  register(formInput: FormGroup, isInterno: Boolean) {
    if (isInterno) {
      console.log('registrazione interno in corso....')
        this.registerInterno(formInput).subscribe({
          next: () => {
            console.log('register successful');
            this.router.navigate(['/benvenuto/login']);
          }, error: (error) => {
            console.error("registration error: ", error);
          }
        }
      );
    } else {
      console.log('registrazione esterno in corso....')
        this.registerEsterno(formInput).subscribe({
          next: () => {
            console.log('register successful');
            this.router.navigate(['/benvenuto/login']);
          }, error: (error) => {
            console.error("registration error: ", error);
          }
        });
      }
    }
}
