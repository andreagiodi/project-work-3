import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  router = inject(Router)
  ngOnInit() {
    this.router.navigate(['/benvenuto']);
  }
}
