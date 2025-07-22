import {Component, inject, OnInit, output} from '@angular/core';
import {DashBoardService} from '../../services/dashboard-service.service';
import {Impiegato, Ospite, Ruolo, User} from '../../modelli/user.model';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-utenti-admin',
  imports: [],
  templateUrl: './utenti-admin.component.html',
  styleUrl: './utenti-admin.component.css'
})
export class UtentiAdminComponent implements OnInit {
  dashboardService = inject(DashBoardService);

  guestList:Ospite[] =[];
  staffList:Impiegato[] =[];
  dividedStaffList?:Map<number, Impiegato[]>;
  roleList?: Ruolo[];

  async loadUsers(){
    this.guestList = await firstValueFrom(this.dashboardService.getOspiti());
    this.staffList = await firstValueFrom(this.dashboardService.getImpiegati());
  }
  async loadRoles(){
    this.roleList = await firstValueFrom(this.dashboardService.getAllRuoli());
    this.dividedStaffList = this.groupByRole(await firstValueFrom(this.dashboardService.getImpiegati()));
  }
  getRoleName(id:number){
    console.log(this.staffList);
    console.log(this.dividedStaffList);
    return this.roleList?.find((entry)=>entry.id ===id)?.nome;
  }

  ngOnInit() {
    this.loadUsers();
    this.loadRoles();
  }

  //map list by role to allow separation in UI
  private groupByRole(list: Impiegato[]): Map<number, Impiegato[]> {
    //init a new key-value map for roles
    const groupsByRole = new Map<number, Impiegato[]>();
    //iterate through the raw list
    list.forEach(role => {
      //if it doesn't exist in the map, add the key with an empty array
      if (!groupsByRole.has(role.idRuolo)) {
        groupsByRole.set(role.idRuolo, []);
      }
      //put the entry in the array of related date key
      groupsByRole.get(role.idRuolo)!.push(role);
    });
    return groupsByRole;
  }

  dataPassed = output<User>();
  passData(user:User){
    this.dataPassed.emit(user);
  }
}
