import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apiURL} from '../app.config';
import {BehaviorSubject, Observable, catchError, of, Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';
import { getLocaleDayNames } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DashboardService{

  constructor(private http: HttpClient) { }

  createPrenotazione(formPre: FormGroup): Observable<any> {
    return this.http.post(`${apiURL}/prenotazione/create`, {}, { withCredentials: true });
  }

  getPrenotazioni(): Observable<any> {
    return this.http.get(`${apiURL}/prenotazione/list`, {withCredentials: true});
  }

  //ADMIN
  getOspiti(): Observable<any> {
    return this.http.get(`${apiURL}/admin/ospiti`, {withCredentials: true});
  }

  getImpiegati(): Observable<any> {
    return this.http.get(`${apiURL}/admin/impiegati`, {withCredentials: true});
  }

  setImpiegatoRuolo(id: number): Observable<any> {
    return this.http.post(`${apiURL}/admin/impiegati/${id}/ruolo`, {
      idRuolo: id
    }, {withCredentials: true})
  }

  updateImpiegatoPassword(password: number): Observable<any> {
    return this.http.post(`${apiURL}/admin/impiegati/${password}/password`, {
      password
    }, {withCredentials: true})
  }

  updateOspitePassword(password: string): Observable<any> {
    return this.http.post(`${apiURL}/admin/ospiti/${password}/password`, {
      password
    }, {withCredentials: true})
  }
}
