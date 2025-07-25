import {Component, inject, OnInit, signal} from '@angular/core';
import {Router} from '@angular/router';
import {PrenotaAppuntamentoComponent} from '../../componenti/prenota-appuntamento/prenota-appuntamento.component';
import {ProssimiAppuntamentiComponent} from '../../componenti/prossimi-appuntamenti/prossimi-appuntamenti.component';
import {AuthService} from '../../services/auth-service.service';
import {Ospite, Prenotazione, TipoOspite, User} from '../../modelli/user.model';
import {firstValueFrom} from 'rxjs';
import {apiURL} from '../../app.config';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ospite',
  imports: [
    PrenotaAppuntamentoComponent,
    ProssimiAppuntamentiComponent,
  ],
  templateUrl: './ospite.component.html',
  styleUrl: './ospite.component.css'
})
export class OspiteComponent implements OnInit {
  /*service injection*/
  authService = inject(AuthService);
  http = inject(HttpClient);
  router = inject(Router);

  //get userType from DB
  userTypeList = new Map<number, string>();

  currentUser!: Ospite | null;
  ngOnInit() {
    this.currentUser = <Ospite>this.authService.getCurrentUser()();
    this.redirectUser(this.currentUser);
    firstValueFrom(this.http.get<TipoOspite[]>(`${apiURL}/tipo_ospite/all`)).then(
      data => {
        data.forEach(type => {
          this.userTypeList.set(type.id, type.tipologia);
        });
      }
    );
  }

  /*logout function call*/
  logOutFunc(){
    this.authService.logout();
  }

  redirectUser(user: User | null) {
    if(user?.userType === 'ospite'){
        this.router.navigate(['/esterno']);
      }
    else{
      console.log('Access restricted to guests only');
      this.router.navigate(['benvenuto/login'], {
        queryParams: { error: 'Accesso ristretto ad Ospiti' }
      });
    }
    if(!user){
      this.router.navigate(['benvenuto/login'], {
        queryParams: { error: "Non hai ancora effettuato l'accesso" }
      });
    }
  }
  //create signal to contain entry details
  entryDetails = signal<Prenotazione | null>(null)
  //function to fetch entry details from custom event
  getEntryData(entry:Prenotazione){
    this.entryDetails.set(entry);
    console.log('got this from event', this.entryDetails());
  }

  //flag to show currentUser info
  isShowingUser = signal(false)
  //invert state with toggle
  toggleUserInfo(){
    this.isShowingUser.set(!this.isShowingUser());
  }
}
