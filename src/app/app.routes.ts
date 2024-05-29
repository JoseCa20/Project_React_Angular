import { Routes } from '@angular/router';
import { LoginComponent } from './feature/auth/pages/login/login.component';
import { RegisterComponent } from './feature/auth/pages/register/register.component';

export const routes: Routes = [
    {path: '', loadChildren: () => import("./feature/feature.routes").then(f => f.routes)}
];
