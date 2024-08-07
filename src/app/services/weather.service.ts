import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = 'ba29557b6faf7520f1d6932b752a7cc9'; 
  private baseUrl: string = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) { }

  getWeather(city: string): Observable<any> {
    const url = `${this.baseUrl}weather?q=${city}&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
