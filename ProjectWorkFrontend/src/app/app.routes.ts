import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {InternoComponent} from './pages/interno/interno.component';
import {OspiteComponent} from './pages/ospite/ospite.component';
import {BenvenutoComponent} from './componenti/benvenuto/benvenuto.component';
import {LoginFormComponent} from './componenti/benvenuto/childCmp/login-form/login-form.component';
import {
  RegisterFormInternoComponent
} from './componenti/benvenuto/childCmp/register-form-interno/register-form-interno.component';
import {
  RegisterFormEsternoComponent
} from './componenti/benvenuto/childCmp/register-form-esterno/register-form-esterno.component';
import {ReceptionistViewComponent} from './componenti/receptionist-view/receptionist-view.component';
import {ReferenteViewComponent} from './componenti/referente-view/referente-view.component';
import {
  NuovoAppuntamentoComponent
} from './componenti/referente-view/childCmp/nuovo-appuntamento/nuovo-appuntamento.component';
import {
  AppuntamentiSospesoComponent
} from './componenti/referente-view/childCmp/appuntamenti-sospeso/appuntamenti-sospeso.component';
import {
  AccettaAppuntamentoComponent
} from './componenti/referente-view/childCmp/accetta-appuntamento/accetta-appuntamento.component';
import {InfoOspiteComponent} from './componenti/receptionist-view/childCmp/info-ospite/info-ospite.component';
import {
  StoricoOspiteComponent
} from './componenti/receptionist-view/childCmp/info-ospite/childCmp/storico-ospite/storico-ospite.component';
import {AdminViewComponent} from './componenti/admin-view/admin-view.component';
import {UtenteComponent} from './componenti/admin-view/childCmp/utente/utente.component';
import {
  WarningComponent
} from './componenti/admin-view/childCmp/utente/childCmp/warning/warning.component';
import {ElencoSospesoComponent} from './componenti/elenco-sospeso(to review!!)/elenco-sospeso.component';

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
      children: [
        {
          path:"receptionist",
          component:ReceptionistViewComponent,
          children: [
            {
              path:":idUtente",
              component:InfoOspiteComponent,
              children:[
                {
                  path:"storico",
                  component:StoricoOspiteComponent
                },
              ]
            }
          ]
        },
        {
          path:"referente",
          component:ReferenteViewComponent,
          children:[
            {
              path:"nuovoAppuntamento",
              component:NuovoAppuntamentoComponent
            },
            {
              path:"appuntamentoSospeso",
              component: AppuntamentiSospesoComponent
            },
            {
              path:"accettaAppuntamento",
              component: AccettaAppuntamentoComponent
            },
          ]
        },
        {
          path:"admin",
          component: AdminViewComponent,
          children: [
            {
              path:":idUtente",
              component: UtenteComponent,
            },
            {
              path:"warning",
              component:WarningComponent,
              outlet:"warning"
            },
          ]
        },
      ],
    },
    {
      path: "esterno",
      component:OspiteComponent,
      children: [
        {
          path:"richiesteSospeso",
          component:ElencoSospesoComponent
        },
      ],
    },
];
