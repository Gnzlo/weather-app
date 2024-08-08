import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-background-switcher',
  templateUrl: './background-switcher.component.html',
  styleUrls: ['./background-switcher.component.scss'],
  standalone: true,
  imports: [CommonModule]  // Agrega CommonModule aquí
})
export class BackgroundSwitcherComponent implements OnInit {
  backgroundImage: string = '';

  private backgroundImages: string[] = [
    '/assets/images/background1.jpg',
    '/assets/images/background2.jpg',
    '/assets/images/background3.jpg',
    '/assets/images/background4.jpg',
    '/assets/images/background5.jpg'
  ];

  ngOnInit(): void {
    this.setRandomBackground();
  }

  setRandomBackground(): void {
    const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
    this.backgroundImage = this.backgroundImages[randomIndex];
  }
}
