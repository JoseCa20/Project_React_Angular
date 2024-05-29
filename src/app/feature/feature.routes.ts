import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
 
export const routes: Routes = [
    {path: 'autenticacion', loadChildren: () => import("./auth/auth.routes").then(a => a.routes)},    
];
