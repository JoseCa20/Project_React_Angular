import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';


export const authWithoutGuard: CanActivateFn = (route, state) => {

  const tokenService = inject(TokenService);

  const router = inject(Router);

  if(!tokenService.getToken()){
    alert("No tienes permisos para acceder a esta página");
    router.navigateByUrl("autenticacion/inicio-sesion");
    return false;
  }
  return true;
};
