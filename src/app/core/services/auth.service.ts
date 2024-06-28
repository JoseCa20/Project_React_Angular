import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, tap } from 'rxjs';
import { AuthLoginRequestDto } from '../dto/authLoginRequestDto';
import { AuthLoginResponseDto } from '../dto/authLoginResponseDto';
import { TokenService } from './token.service';
import { AuthRegisterRequestDto } from '../dto/authRegisterRequestDto';
import { AuthRegisterResponseDto } from '../dto/authRegisterResponseDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  

  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  public signIn(authDto: AuthLoginRequestDto): Observable<AuthLoginResponseDto>{
    return this.http.post<AuthLoginResponseDto>(`${this.apiUrl}/auth/sign-in`, authDto).pipe(
      tap( response => {
        console.log(response);
        console.log(response.jwt);
        this.tokenService.saveToken(response.jwt);        
      })
    );
  }

  public signUp(registerRequestDto: AuthRegisterRequestDto): Observable<AuthRegisterResponseDto>{
    return this.http.post<AuthRegisterResponseDto>(`${this.apiUrl}/auth/sign-up`, registerRequestDto);
  }

}
