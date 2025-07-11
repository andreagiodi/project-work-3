import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

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
      entrata: new FormControl(''),
      uscita: new FormControl(''),
    }),
    note: new FormControl('')
  })
  onSubmit(){
    console.log(this.infoOspite.value);
  }

}
