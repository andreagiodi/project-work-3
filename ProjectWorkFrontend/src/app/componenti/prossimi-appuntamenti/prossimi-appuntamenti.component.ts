import {Component, computed, effect, inject, signal} from '@angular/core';
import {DashboardService} from '../../services/dashboard-service.service';
import {Prenotazione, User} from '../../modelli/user.model';
import {firstValueFrom} from 'rxjs';
import {AuthService} from '../../services/auth-service.service';

@Component({
  selector: 'app-prossimi-appuntamenti',
  imports: [],
  templateUrl: './prossimi-appuntamenti.component.html',
  styleUrl: './prossimi-appuntamenti.component.css'
})
export class ProssimiAppuntamentiComponent {
  /*service injection*/
  private dashboardService = inject(DashboardService);
  private authService = inject(AuthService);

  //current user var declaration
  currentUser?: User | null;
  userId?: number;

  // appointment list
  appointments = signal<Prenotazione[]>([]);

  // automatically updates when appointments change
  groupedAppointments = computed(() => {
    const appointmentsList = this.appointments();
    return appointmentsList.length > 0 ? this.groupByDate(appointmentsList) : null;
  });

  // user changes
  private userEffect = effect(() => {
    const user = this.authService.getCurrentUser()();
    if (user) {
      this.currentUser = user;
      this.userId = user.id;
      console.log(this.currentUser);
      this.loadPrenotazioni();
    }
  });

  // service signal changes
  private appointmentsEffect = effect(() => {
    const serviceAppointments = this.dashboardService.getAppointmentsSignal()();
    if (serviceAppointments.length > 0) {
      this.appointments.set(serviceAppointments);
    }
  });

  //function to load prenotazioni
  async loadPrenotazioni(): Promise<void> {
    try {
      const response: Prenotazione[] = await firstValueFrom(this.dashboardService.getPrenotazioni());
      console.log('Fetched list', response);

      // This will trigger the computed signal to recalculate
      this.appointments.set(response);

    } catch (error: any) {
      console.error('Error during list fetching', error);
      this.appointments.set([]);
    }
  }

  //map list by date to allow separation in UI
  private groupByDate(list: Prenotazione[]): Map<string, Prenotazione[]> {
    const sortedList = [...list].sort((a, b) =>
      new Date(a.dataPrenotazione).getTime() - new Date(b.dataPrenotazione).getTime()
    );

    const groupsByDate = new Map<string, Prenotazione[]>();

    sortedList.forEach(entry => {
      const date = new Date(entry.dataPrenotazione);
      const dateString = date.toLocaleDateString('it-IT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      if (!groupsByDate.has(dateString)) {
        groupsByDate.set(dateString, []);
      }
      groupsByDate.get(dateString)!.push(entry);
    });

    return groupsByDate;
  }
}
