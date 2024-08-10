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
    "The highest temperature ever recorded on Earth was 56.7 °C (134.1 °F) in Death Valley, California, in 1913.",
    "The heaviest rainfall in a single day was recorded on Réunion Island in 1952, with 1,870 mm (73.6 inches) of precipitation.",
    "The longest lightning strike ever recorded spanned 709 kilometers (441 miles), crossing three U.S. states in 2020.",
    "The longest-lasting hurricane in history lasted 31 days in 1994 in the Pacific Ocean.",
    "The longest-lasting hurricane in history lasted 31 days in 1994 in the Pacific Ocean.",
    "The ozone layer protects Earth from the harmful ultraviolet rays of the sun.",
    "In 1816, the 'Year Without a Summer' occurred due to the eruption of Mount Tambora, causing global cooling.",
    "Cumulus clouds can reach heights of up to 20,000 meters (65,600 feet).",
    "The driest place on Earth is the Atacama Desert in Chile, where some areas haven't received rain in hundreds of years.",
  ];

  ngOnInit(): void {
    this.getRandomFact();
  }

  getRandomFact(): void {
    const randomIndex = Math.floor(Math.random() * this.weatherFacts.length);
    this.fact = this.weatherFacts[randomIndex];
  }
}
