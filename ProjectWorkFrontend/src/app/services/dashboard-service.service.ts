import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apiURL} from '../app.config';
import {BehaviorSubject, Observable, catchError, of, Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DashboardService{

  constructor(private http: HttpClient) { }

  createPrenotazione(formPre: FormGroup): Observable<any> {
    return this.http.post(`${apiURL}/prenotazione/create`, {}, { withCredentials: true });
  }
}
