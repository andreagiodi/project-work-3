import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {AbstractControl, FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService{

  private apiUrl = 'https://tee-loops-lean-decades.trycloudflare.com';
  constructor(private http: HttpClient, private router: Router) { }

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

    return this.http.post(`${this.apiUrl}/register/staff`, {
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

  registerInterno(formData: FormGroup): Observable<any> {
    const nome = formData.get('nome')?.value;
    const cognome = formData.get('cognome')?.value;
    const email = formData.get('email')?.value;
    const isEsterno = formData.get('tipoStaff')?.value;
    const password = formData.get('passwords')?.get('password')?.value;

    return this.http.post(`${this.apiUrl}/register/staff`, {
      email,
      password,
      nome,
      cognome,
      isEsterno,
    }, { withCredentials: true });
  }
}
