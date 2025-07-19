import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {futureTime} from '../../../../validators/customValid.validator';

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
export class InfoOspiteComponent {
  infoOspite= new FormGroup({
    ore: new FormGroup({
      entrata: new FormControl('', [futureTime()]),
      uscita: new FormControl('', [futureTime()]),
    }),
    note: new FormControl('')
  })
  onSubmit(){
    console.log(this.infoOspite.value);
  }

}
