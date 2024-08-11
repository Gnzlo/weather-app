import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-modal',
  standalone: true,
  imports: [],
  templateUrl: './app-info-modal.component.html',
  styleUrl: './app-info-modal.component.scss'
})
export class AppInfoModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showWelcomeModal();
  }

  private showWelcomeModal(): void {
    Swal.fire({
      title: 'Welcome!',
      text: 'This is a brief overview of the app.',
      icon: 'info',
      confirmButtonText: 'Got it!',
      allowOutsideClick: false,
      allowEscapeKey: false
    });
  }
}
