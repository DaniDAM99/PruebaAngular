import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  mapa: any

  ngOnInit(): void {
    this.mapa = L.map('posicionMapa').setView([39.392175729872434, -3.221890794809099], 13);
    const trozos = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(this.mapa)

    L.marker([39.392175729872434, -3.221890794809099]).addTo(this.mapa)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
  }

}
