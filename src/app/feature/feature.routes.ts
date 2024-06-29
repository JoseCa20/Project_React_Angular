import { Routes } from '@angular/router';
import { authWithoutGuard } from '../core/guards/auth-without.guard';
import { authWhitGuard } from '../core/guards/auth-whit.guard';
import { withRoleAdminGuard } from '../core/guards/WithRoleAdmin.guard';
 
export const routes: Routes = [
    {path: 'autenticacion', canActivate: [authWhitGuard], loadChildren: () => import("./auth/auth.routes").then(a => a.routes)},    
    {path: 'portal', canActivate: [authWithoutGuard], loadChildren: () => import("./home/home.routes").then(n => n.routes)},
    //{path: 'admin', canActivate: [withRoleAdminGuard], loadChildren: () => import("./admin/admin.routes").then(n => n.routes)}
];
