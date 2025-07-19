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

  // user change
  private userEffect = effect(() => {
    const user = this.authService.getCurrentUser()();
    if (user) {
      this.currentUser = user;
      this.userId = user.id;
      console.log(this.currentUser);
      this.loadPrenotazioni();
    }
  });

  // service appointments signal changes
  private appointmentsEffect = effect(() => {
    //get new service appointments on signal change (effect)
    const serviceAppointments = this.dashboardService.getAppointmentsSignal()();
    //if length is more thant 0
    if (serviceAppointments.length > 0) {
      //set local appointments variable to the latest version from service
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
    //create a sorted raw list ordered by dates
    const sortedList = [...list].sort((a, b) =>
      new Date(a.dataPrenotazione).getTime() - new Date(b.dataPrenotazione).getTime()
    );
    //init a new key-value map for dates
    const groupsByDate = new Map<string, Prenotazione[]>();
    //iterate through the raw-ordered list
    sortedList.forEach(entry => {
      //create a date obj for the date in the single entry
      const date = new Date(entry.dataPrenotazione);
      //parse to readable string
      const dateString = date.toLocaleDateString('it-IT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      //if it doesn't exist in the map, add the key with an empty array
      if (!groupsByDate.has(dateString)) {
        groupsByDate.set(dateString, []);
      }
      //put the entry in the array of related date key
      groupsByDate.get(dateString)!.push(entry);
    });
    return groupsByDate;
  }
}
