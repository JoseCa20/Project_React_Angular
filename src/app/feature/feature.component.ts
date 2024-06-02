import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {

}
