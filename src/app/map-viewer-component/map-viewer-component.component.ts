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

  constructor(private mapService: MapService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {
    const mapOptions: L.MapOptions = {
      center: [51.505, -0.09],
      zoom: 5
    };

    this.map = L.map(this.gmap?.nativeElement, mapOptions);

    L.tileLayer(this.mapService.getTileLayerUrl(), {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }
}
