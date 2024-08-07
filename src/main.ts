import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './app/services/weather.service';
import { MapService } from './app/services/map.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    WeatherService,
    MapService
  ]
})
  .catch(err => console.error(err));
