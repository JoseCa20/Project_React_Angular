import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { AppBaseComponent } from '../../../../core/utils/appBaseComponent';
import { errorsForm } from '../../../../core/enums/errorsForm';
import { AuthRegisterRequestDto } from '../../../../core/dto/authRegisterRequestDto';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent extends AppBaseComponent{

  public registerForm: FormGroup;

  public passwordGenerate: string;

  public registered: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){
    super();
    this.registerForm = this.fb.group({
      idCard: ['', Validators.required],
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
      + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]],
      cellphone: ['', Validators.pattern("^[0-9]*$")],
      password: ['', Validators.required]
    });
  }

  public async signUp(): Promise<void>{

    console.log("Entré al registrar");

    let dtoRegister: AuthRegisterRequestDto = this.registerForm.value;

    dtoRegister.rol = "CLIENTE";

    if(this.registerForm.valid){
      await lastValueFrom(this.authService.signUp(dtoRegister))
        //this.passwordGenerate = resp.password;  
        //this.registered = true;
      await this.router.navigateByUrl("/autenticacion/inicio-sesion");
      console.log("salí")
      
    }else{
      console.log(this.getAllErrors(this.registerForm));
    }

  }

  public getErrorsForm(field: string): string {

    let message;

    const required: Array<string> = ["fullName", "idCard", "address", "email", "cellphone", "password"];
    const formatEmail: Array<string> = ["email"];
    const onlyNumber: Array<string> = ["idCard", "cellphone"];

    if(this.isTouchedField(this.registerForm, field)){

      if(required.includes(field) && this.registerForm.get(field).hasError('required')){
        message = errorsForm.REQUIRED;
      }else if(formatEmail.includes(field) && this.registerForm.get(field).hasError('pattern')){
        message = errorsForm.FORMAT_EMAIL;
      }else if(onlyNumber.includes(field) && this.registerForm.get(field).hasError('pattern')){
        message = errorsForm.ONLY_NUMBER;
      }    
    }
    return message;
  }
}

