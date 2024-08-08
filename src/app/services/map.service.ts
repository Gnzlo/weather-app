import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private apiKey: string = 'ba29557b6faf7520f1d6932b752a7cc9';
  private baseUrl: string = 'https://maps.openweathermap.org/maps/2.0/weather';

  constructor(private http: HttpClient) {}

  getTileLayerUrl(layer: string = 'temp_new'): string {
    return `${this.baseUrl}/${layer}/{z}/{x}/{y}?appid=${this.apiKey}`;
  }
}
