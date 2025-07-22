import {Component, inject, input, OnInit, output} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Ospite, Prenotazione, Stato} from '../../../../modelli/user.model';
import {firstValueFrom} from 'rxjs';
import {apiURL} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {ValidationErrorService} from '../../../../validators/validationErrors';

@Component({
  selector: 'app-info-ospite',
  imports: [
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './info-ospite.component.html',
  styleUrl: './info-ospite.component.css'
})
export class InfoOspiteComponent implements OnInit {
  /*service injection*/
  private http = inject(HttpClient);


  selectedUser= input<Ospite|null>(null);
  selectedPrenotazione= input<Prenotazione|null>(null);

  infoOspite= new FormGroup({
    ore: new FormGroup({
      entrata: new FormControl(false),
      uscita: new FormControl(false),
    }),
    note: new FormControl('')
  })
  /*returns error message based on passed control*/
  getErrorMessage(controlName: string): string | null {
    const control = this.infoOspite.get(controlName);
    return ValidationErrorService.getMessage(control!);
  }

  formData = output<{ore:{entrata:boolean|null, uscita:boolean|null}, note:string|null}>();
  onSubmit(){
    /*submit logic changing times*/
    console.log(this.infoOspite.getRawValue())
    /*pass the form to father, allow it to send data to backend Ask andrea about 2 endpoints*/
    this.formData.emit(this.infoOspite.getRawValue())
  }

//load roles from DB
  stateList = new Map<number, string>();

  ngOnInit() {
    firstValueFrom(this.http.get<Stato[]>(`${apiURL}/stato/all`)).then(
      data => {
        data.forEach(type => {
          this.stateList.set(type.id, type.nome);
        });
      }
    );
  }
}
