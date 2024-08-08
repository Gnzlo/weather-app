import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapService } from '../services/map.service';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer-component.component.html',
  styleUrls: ['./map-viewer-component.component.scss'],
  standalone: true
})
export class MapViewerComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer', { static: false }) 
  gmap: ElementRef | undefined;
  map: L.Map | undefined;
  currentLayer: L.TileLayer | undefined;

  constructor(private mapService: MapService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeMap();
    this.changeLayer('temp_new'); // Capa por defecto
  }

  private initializeMap(): void {
    const mapOptions: L.MapOptions = {
      center: [40.4168, -3.7038], // Coordenadas de Madrid, España
      zoom: 5,
    };

    this.map = L.map(this.gmap?.nativeElement, mapOptions);

    // Añadimos un tile base, podría ser OpenStreetMap, por ejemplo:
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  changeLayer(layerName: string): void {
    if (this.currentLayer) {
      this.map?.removeLayer(this.currentLayer);
    }

    this.currentLayer = L.tileLayer(this.mapService.getTileLayerUrl('temp_new'), {
      maxZoom: 19,
      attribution: '&copy; OpenWeatherMap contributors'
    });

    this.currentLayer.addTo(this.map!);
  }
}
