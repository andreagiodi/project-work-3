import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {AbstractControl, FormGroup} from '@angular/forms';
/*import { apiURL } from '../app.config';*/

@Injectable({
  providedIn: 'root'
})
export class RegisterService{

  apiURL="https://trap-those-lamb-pumps.trycloudflare.com"

  constructor(private http: HttpClient) { }

  passwordMatch(group:AbstractControl){
    const password = group.get('password')?.value;
    const confirm = group.get('newPassword')?.value;

    return password===confirm ? null : { passwordMissMatch : true}
  }

  registerEsterno(formData: FormGroup): Observable<any> {
    const nome = formData.get('datiAnagrafici')?.get('nome')?.value;
    const cognome = formData.get('datiAnagrafici')?.get('cognome')?.value;
    const codiceFiscale = formData.get('datiAnagrafici')?.get('codiceFiscale')?.value;
    const email = formData.get('contatti')?.get('email')?.value;
    const telefono = formData.get('contatti')?.get('telefono')?.value;
    const azienda = formData.get('azienda')?.value;
    const idTipoOspite = formData.get('tipoOspite')?.value;
    const password = formData.get('passwords')?.get('password')?.value;

    return this.http.post(`${this.apiURL}/register/staff`, {
      nome,
      cognome,
      email,
      password,
      telefono,
      codiceFiscale,
      azienda,
      idTipoOspite,
    }, { withCredentials: true });
  }

  registerInterno(formData : FormGroup): Observable<any> {
    const nome = formData.get('nome')?.value;
    const cognome = formData.get('cognome')?.value;
    const email = formData.get('email')?.value;
    const isEsterno = formData.get('tipoStaff')?.value;
    const password = formData.get('passwords')?.get('password')?.value;

    console.log('here i am')
    console.log(nome, cognome, email, password, isEsterno);
    return this.http.post(`${this.apiURL}/register/staff`, {
      email,
      password,
      nome,
      cognome,
      isEsterno,
    }, {withCredentials: true });
  }

  register(formInput:FormGroup, isInterno:Boolean) {
    if(isInterno){
      console.log('registrazione interno in corso....')
      try{
        this.registerInterno(formInput).subscribe(
          () => {
            console.log('register successful');
          }
        );
      }catch(error){
        console.error("registration error",error);
      }
    }else{
      console.log('registrazione esterno in corso....')
      try{
        this.registerEsterno(formInput).subscribe(
          () => {
            console.log('register successful');
          }
        );
      }catch(error){
        console.error("registration error",error);
      }
    }
  }
}
