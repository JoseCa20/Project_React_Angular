import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AppBaseComponent } from '../../../../core/utils/appBaseComponent';
import { CommonModule } from '@angular/common';
import { AuthLoginRequestDto } from '../../../../core/dto/authLoginRequestDto';
import { AuthService } from '../../../../core/services/auth.service';
import { lastValueFrom } from 'rxjs';
import { TokenService } from '../../../../core/services/token.service';
import { errorsForm } from '../../../../core/enums/errorsForm';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends AppBaseComponent{

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private tokenService: TokenService, private router: Router){
    super();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public async signIn(): Promise<void>{

    let dtoLogin: AuthLoginRequestDto;

    if(this.loginForm.valid){
      let email = this.loginForm.get('email').value;
      let password = this.loginForm.get('password').value;

      dtoLogin = {
        email,
        password
      }

      await lastValueFrom(this.authService.signIn(dtoLogin));
      
      await this.router.navigateByUrl("/portal");

    }else{
      alert("Formulario incorrecto")
      console.log(this.getAllErrors(this.loginForm))
    }
  }

  public getErrorsForm(field: string): string {
    let message;
    if(this.isTouchedField(this.loginForm, field)){
      if(this.loginForm.get(field).hasError('required')){
        message = errorsForm.REQUIRED;
      }else if(this.loginForm.get(field).hasError('email')){
        message = errorsForm.FORMAT_EMAIL;
      }
    }
    return message;
  }
}
