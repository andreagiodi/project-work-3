import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {InternoComponent} from './pages/interno/interno.component';
import {OspiteComponent} from './pages/ospite/ospite.component';
import {BenvenutoComponent} from './componenti/benvenuto/benvenuto.component';
import {LoginFormComponent} from './componenti/benvenuto/childrenComponents/login-form/login-form.component';
import {
  RegisterFormInternoComponent
} from './componenti/benvenuto/childrenComponents/register-form-interno/register-form-interno.component';
import {
  RegisterFormEsternoComponent
} from './componenti/benvenuto/childrenComponents/register-form-esterno/register-form-esterno.component';

export const routes: Routes = [
    {
      path: "",
      component:HomeComponent,
      children: [
        {
          path: "benvenuto",
          component: BenvenutoComponent,
          children: [
            {
              path: "login",
              component: LoginFormComponent,
            },
            {
              path: "registerInterno",
              component: RegisterFormInternoComponent,
            },
            {
              path: "registerEsterno",
              component: RegisterFormEsternoComponent,
            },
            {
              path: "**",
              redirectTo: "benvenuto"
            }
          ],
        }
      ],
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
