import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apiURL} from '../app.config';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import {Prenotazione, PrenotazioneRequest} from '../modelli/user.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService{

  constructor(private http: HttpClient) { }

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
    return this.http.post(`${apiURL}/prenotazione/create`, request, { withCredentials: true })
      .pipe(
        tap(() => {
          // After creating, refresh the appointment list
          this.refreshAppointments();
        })
      );
  }

  //sends a GET request to list all appointments of current user --> list of Prenotazione types
  getPrenotazioni(): Observable<Prenotazione[]> {
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

  // update stato to a specific appointment
  updateAppointmentStatus(appointmentId: number, newStato: number): void {
    //get the current list from signal
    const currentAppointments = this.appointmentsSignal();
    //create the updated list using map
    const updatedAppointments = currentAppointments.map(appointment=>
      //search for specific id then change stato
      appointment.id === appointmentId ? { ...appointment, stato: newStato } : appointment
    );
    //set the current list to the updated one
    this.appointmentsSignal.set(updatedAppointments);
  }

  //RECEPTIONIST SPECIFIC
  setUscitaOspite(id: number): Observable<any> {
    return this.http.post(`${apiURL}/reception/uscita/${id}`, {
      id: id
    }, {withCredentials: true})
      .pipe(
        tap(() => {
          // Refresh appointments after checkout (might affect status)
          this.refreshAppointments();
        })
      );
  }

  getPresenti(): Observable<any> {
    // Fixed: removed extra quote
    return this.http.get(`${apiURL}/reception/presenti`, {withCredentials: true});
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

  //REFERENTE SPECIFIC
  getPrenotazioniReferente(): Observable<any> {
    // Fixed: removed extra quote
    return this.http.get(`${apiURL}/api/referente/prenotazioni`, {withCredentials: true});
  }

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
  getProfileInfo(id: number): Observable<any> {
    return this.http.get(`${apiURL}/profile/${id}`, {withCredentials: true});
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
