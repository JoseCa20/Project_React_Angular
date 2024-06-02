import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { inject } from '@angular/core';

export const authWhitGuard: CanActivateFn = (route, state) => {

  const tokenService = inject(TokenService);

  const router = inject(Router);

  if(tokenService.getToken()){
    router.navigateByUrl("portafolio");
    return true;
  }
  return false;

};
