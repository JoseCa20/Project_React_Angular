import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { TokenService } from '../services/token.service';
import { authWithoutGuard } from './auth-without.guard';
import { Roles } from '../enums/Roles';

export const withRoleAdminGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);

  const router = inject(Router);

  const withoutAuth = inject(authWithoutGuard);

  if(tokenService.getInfoToken().rol != Roles.ADMIN && !withoutAuth()){
    alert("No tienes permisos para acceder a esta página");
    router.navigateByUrl("autenticacion/inicio-sesion");
    return false;
  }
  return true;
};
