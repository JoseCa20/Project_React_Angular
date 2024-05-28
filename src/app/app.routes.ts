import { Routes } from '@angular/router';
import { LoginComponent } from './feature/auth/pages/login/login.component';

export const routes: Routes = [
    {path: '', loadChildren: () => import("./feature/feature.module").then(f => f.FeatureModule)},
    {path: 'autenticacion', loadChildren: () => import("../app/feature/auth/auth.module").then(a => a.AuthModule)},
    {path: "inicio-sesion", component: LoginComponent}
];
