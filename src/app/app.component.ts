import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { MapService } from './services/map.service'; 
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapViewerComponent } from './map-viewer-component/map-viewer-component.component';
import { WeatherFactComponent } from "./weather-fact/weather-fact.component";
import { BackgroundSwitcherComponent } from "./background-switcher/background-switcher.component";
import Swal from 'sweetalert2';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, WeatherDetailsComponent, NavbarComponent, MapViewerComponent, WeatherFactComponent, BackgroundSwitcherComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weatherData: any;
  city: string = 'Barcelona';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeather();
    this.showWelcomeModal();
  }

  private showWelcomeModal(): void {
      Swal.fire({
        title: 'Welcome!',
        html: `
        <p>This is a personal project to practice/learn more about Angular and Typescript </p>`,        
        icon: 'info',
        confirmButtonText: 'Got it!',
        confirmButtonColor: '#3085d6',
        footer: '<a href="/about">Learn more about this project you can check the code at GitHub</a>',
        allowOutsideClick: false,
        allowEscapeKey: false
      }).then(() => {
        localStorage.setItem('hasSeenModal', 'true');
      });
  }

  getWeather(): void {
    this.weatherService.getWeather(this.city).subscribe(data => {
      this.weatherData = data;
    });
  }
}
