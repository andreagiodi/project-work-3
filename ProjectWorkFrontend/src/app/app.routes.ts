import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistrazioneInternoComponent } from './pages/registrazione-interno/registrazione-interno.component';
import { RegistrazioneEsternoComponent } from './pages/registrazione-esterno/registrazione-esterno.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: "", component:HomeComponent},
    {path: "register-staff", component:RegistrazioneInternoComponent},
    {path: "register-ospite", component:RegistrazioneEsternoComponent},
    {path:"login", component:LoginComponent}
];
