import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createPrenotazione(): Observable<any> {
    return this.http.post(`${this.apiUrl}/prenotazione/create`, {}, { withCredentials: true });
  }
}
