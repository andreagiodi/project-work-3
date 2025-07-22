import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiURL} from '../app.config';
import {Observable, tap} from 'rxjs';
import {Prenotazione, PrenotazioneRequest, User} from '../modelli/user.model';
import {AuthService} from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class DashBoardService {

  /*service injection*/
  http = inject(HttpClient);
  authService = inject(AuthService);

  /*===Appointments management ===*/
  // reactive state for appointments using signals
  private appointmentsSignal = signal<Prenotazione[]>([]);

  // getter for the signal (read-only)
  getAppointmentsSignal() {
    return this.appointmentsSignal.asReadonly();
  }

  //sends a prenotazione create POST with data from custom type
  createPrenotazione(request: PrenotazioneRequest): Observable<any> {
    console.log(request);
    return this.http.post(`${apiURL}/prenotazione/create`, request, {withCredentials: true})
      .pipe(
        tap(() => {
          // After creating, refresh the appointment list
          this.refreshAppointments();
        })
      );
  }

  //sends a GET request to list all appointments of current user --> list of Prenotazione types
  getPrenotazioni(): Observable<Prenotazione[]> {
    //check who is calling the function
    const currentUser = this.authService.getCurrentUser()();
    //based on caller, if it's an impiegato then gets a different list
    if (currentUser?.userType === 'impiegato') {
      if (currentUser.idRuolo === 2) {
        return this.http.get<Prenotazione[]>(`${apiURL}/prenotazione/all`);
      }else if (currentUser.idRuolo === 3) {
        // Fixed: removed extra quote
        return this.http.get<Prenotazione[]>(`${apiURL}/api/referente/prenotazioni`, {withCredentials: true});
      }
    }
    return this.http.get<Prenotazione[]>(`${apiURL}/prenotazione/list`, {withCredentials: true})
      .pipe(
        tap(appointments => {
          // Update both reactive states when data is fetched
          this.appointmentsSignal.set(appointments);
        })
      );
  }

  // refresh appointments (call this from components)
  refreshAppointments(): void {
    this.getPrenotazioni().subscribe({
      next: (appointments) => {
        console.log('Appointments refreshed:', appointments);
      },
      error: (error) => {
        console.error('Error refreshing appointments:', error);
      }
    });
  }

  //RECEPTIONIST SPECIFIC

  /*NOT WORKING --> TESTING andrea fix*/
  setEntrataOspite(id: number): Observable<any> {
    return this.http.get(`${apiURL}/reception/ingresso/${id}`, {withCredentials: true})
      .pipe(
        tap(() => {
          // Refresh appointments after check-in (might affect status)
          this.refreshAppointments();
        })
      );
  }
  /*NOT WORKING --> awaiting andrea fix*/
  setUscitaOspite(id: number): Observable<any> {
    return this.http.get(`${apiURL}/reception/uscita/${id}`, {withCredentials: true})
      .pipe(
        tap(() => {
          // Refresh appointments after checkout (might affect status)
          this.refreshAppointments();
        })
      );
  }

  setNonPresentatoOspite(id: number): Observable<any> {
    return this.http.post(`${apiURL}/reception/non-presentato/${id}`, {
      id: id
    }, {withCredentials: true})
      .pipe(
        tap(() => {
          // Refresh appointments after marking as no-show
          this.refreshAppointments();
        })
      );
  }

  getPresenti(): Observable<any> {
    // Fixed: removed extra quote
    return this.http.get(`${apiURL}/reception/presenti`, {withCredentials: true});
  }

  //REFERENTE SPECIFIC

  approvaPrenotazione(id: number): Observable<any> {
    return this.http.post(`${apiURL}/api/referente/prenotazioni/${id}/approva`, {
      id: id // ID PRENOTAZIONE
    }, {withCredentials: true})
      .pipe(
        tap(() => {
          // Refresh appointments after approval
          this.refreshAppointments();
        })
      );
  }

  rifiutaPrenotazione(id: number): Observable<any> {
    return this.http.post(`${apiURL}/api/referente/prenotazioni/${id}/rifiuta`, {
      id: id // ID PRENOTAZIONE
    }, {withCredentials: true})
      .pipe(
        tap(() => {
          // Refresh appointments after rejection
          this.refreshAppointments();
        })
      );
  }

  /*===END Appointments management ===*/

  //sends a GET request to get that specific user's info
  getOspiteInfo(id: number): Observable<User> {
    return this.http.get<User>(`${apiURL}/ospite/${id}`, {withCredentials: true});
  }

  //ADMIN SPECIFIC
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
