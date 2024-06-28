import { HttpEvent, HttpHandler, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  
  const tokenService = inject(TokenService).getToken();
  
  let headers;

  let token = tokenService

  if(!token){
    return next.handle(req);    
  }
  headers = {
    'Authorization': 'Bearer'+token,
    'Access-Control-Allow-Origin': '*'
  }

  let authRequest = req.clone({
    setHeaders: {
      ...headers
    }
  });

  return next.handle(authRequest);
  

};
