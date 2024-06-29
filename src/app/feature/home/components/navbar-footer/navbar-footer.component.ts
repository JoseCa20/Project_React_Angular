import { Component } from '@angular/core';
import { TokenService } from '../../../../core/services/token.service';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-navbar-footer',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './navbar-footer.component.html',
  styleUrl: './navbar-footer.component.css'
})
export class NavbarFooterComponent {

  public nameClient: string;

  constructor(private tokenService: TokenService){
    this.nameClient = this.tokenService.getInfoToken().fullName;
  }

  openModal() {
    const modal = document.getElementById("exampleModal");
    if (modal != null) {
      modal.style.display = 'block';
    }
  }

  

  
}
