import {Component, effect, inject, input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Ospite, Prenotazione, User} from '../../../../modelli/user.model';
import {DashBoardService} from '../../../../services/dashboard-service.service';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-accetta-appuntamento',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './accetta-appuntamento.component.html',
  styleUrl: './accetta-appuntamento.component.css'
})
export class AccettaAppuntamentoComponent {
  /*service injection*/
  private dashboardService = inject(DashBoardService);

  accettaAppuntamento = new FormGroup({
    data: new FormControl('', [Validators.required]),
    ora: new FormControl('', [Validators.required])
  })

  onSubmit() {
    console.log(this.accettaAppuntamento.value);
  }

  passedData = input<Prenotazione | null>(null);
  selectedUser: Ospite|null = null;
  effectRef = effect(()=>{
    const temp = this.passedData();
    this.loadUser(temp!);
  })

  loadUser(prenotazione:Prenotazione):User|null{
    firstValueFrom(this.dashboardService.getOspiteInfo(prenotazione.idOspite)).then((user) =>{
      this.selectedUser =<Ospite>user;
    });
    return null;
  }

  async refuse(){
    const response =await firstValueFrom(this.dashboardService.rifiutaPrenotazione(this.passedData()!.id));
    console.log(response);
  }

  async accept(){
    const response = await firstValueFrom(this.dashboardService.approvaPrenotazione(this.passedData()!.id))
    console.log(response)
  }
}
