import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-fact',
  templateUrl: './weather-fact.component.html',
  styleUrls: ['./weather-fact.component.scss'],
  standalone: true
})
export class WeatherFactComponent implements OnInit {
  fact: string = '';

  private weatherFacts: string[] = [
    "La Tierra ha aumentado su temperatura media global en aproximadamente 1 °C desde finales del siglo XIX.",
    "El Ártico se está calentando al doble de la velocidad que el resto del planeta.",
    "El nivel del mar ha subido unos 20 cm en los últimos 100 años debido al calentamiento global.",
    "Las emisiones de dióxido de carbono son las más altas en 800,000 años.",
    "Los fenómenos meteorológicos extremos son cada vez más frecuentes debido al cambio climático."
  ];

  ngOnInit(): void {
    this.getRandomFact();
  }

  getRandomFact(): void {
    const randomIndex = Math.floor(Math.random() * this.weatherFacts.length);
    this.fact = this.weatherFacts[randomIndex];
  }
}
