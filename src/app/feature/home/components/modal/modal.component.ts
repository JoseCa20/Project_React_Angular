import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent { 

  closeModal(){
    const modal = document.getElementById("exampleModal");
    if(modal != null){
      modal.style.display = 'none';
    }
  }


}
