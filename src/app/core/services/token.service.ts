import { Injectable } from '@angular/core';
import { getCookie, setCookie } from 'typescript-cookie';
import {jwtDecode} from "jwt-decode";
import { ClienteJwtDto } from '../dto/clienteJwtDto';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public getToken(): string{
    return getCookie('token');
  }

  public saveToken(token: string): void{
    setCookie('token', token, {expires: 1, path:"/"});
  }

  public deleteToken(): void{  }

  public getInfoToken(): ClienteJwtDto {
    let infoToken = jwtDecode(getCookie("token"));
    return <ClienteJwtDto>infoToken;
  }
}
