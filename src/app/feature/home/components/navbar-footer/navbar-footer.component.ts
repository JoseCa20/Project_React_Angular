import { Component } from '@angular/core';
import { TokenService } from '../../../../core/services/token.service';

@Component({
  selector: 'app-navbar-footer',
  standalone: true,
  imports: [],
  templateUrl: './navbar-footer.component.html',
  styleUrl: './navbar-footer.component.css'
})
export class NavbarFooterComponent {

  public nameClient: string;

  constructor(private tokenService: TokenService){
    this.nameClient = this.tokenService.getInfoToken().fullName;
  }

}
