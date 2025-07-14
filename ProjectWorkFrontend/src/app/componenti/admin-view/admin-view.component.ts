import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {UtentiAdminComponent} from '../utenti-admin/utenti-admin.component';

@Component({
  selector: 'app-admin-view',
  imports: [
    RouterOutlet,
    UtentiAdminComponent
  ],
  templateUrl: './admin-view.component.html',
  styleUrl: './admin-view.component.css'
})
export class AdminViewComponent {

}
