import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {InternoComponent} from './pages/interno/interno.component';
import {OspiteComponent} from './pages/ospite/ospite.component';

export const routes: Routes = [
    {
      path: "",
      component:HomeComponent,
      children: [],
    },
    {
      path: "interno",
      component:InternoComponent,
      children: [],
    },
    {
      path: "esterno",
      component:OspiteComponent,
      children: [],
    },
];
