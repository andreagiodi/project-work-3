import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apiURL} from '../app.config';
import { Observable} from 'rxjs';
import {Prenotazione} from '../modelli/user.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService{

  constructor(private http: HttpClient) { }

  //sends a prenotazione create POST with data from custom type
  createPrenotazione(request: Prenotazione): Observable<any> {
    console.log(request);
    return this.http.post(`${apiURL}/prenotazione/create`, request, { withCredentials: true });
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

  //reception

  //MANCA SET ENTRATA OSPITE DA RIVEDERE

  setUscitaOspite(id: number): Observable<any> {
    return this.http.post(`${apiURL}/reception/uscita/${id}`, {
      id: id
    }, {withCredentials: true})
  }

  getPresenti(): Observable<any> {
    return this.http.get(`${apiURL}"/reception/presenti"`, {withCredentials: true});
  }

  setNonPresentatoOspite(id: number): Observable<any> {
    return this.http.post(`${apiURL}/reception/non-presentato/${id}`, {
      id: id
    }, {withCredentials: true})
  }

  //Referente

   getPrenotazioniReferente(): Observable<any> {
    return this.http.get(`${apiURL}"/api/referente/prenotazioni"`, {withCredentials: true});
  }

  approvaPrenotazione(id: number): Observable<any> {
    return this.http.post(`${apiURL}/api/referente/prenotazioni/${id}/approva`, {
      id: id // ID PRENOTAIAZONE
    }, {withCredentials: true})
  }

  rifiutaPrenotazione(id: number): Observable<any> {
    return this.http.post(`${apiURL}/api/referente/prenotazioni/${id}/rifiuta`, {
      id: id // ID PRENOTAIAZONE
    }, {withCredentials: true})
  }


}
