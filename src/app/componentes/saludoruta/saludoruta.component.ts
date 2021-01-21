import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludoruta',
  templateUrl: './saludoruta.component.html',
  styleUrls: ['./saludoruta.component.css']
})
export class SaludorutaComponent implements OnInit {
  nombre: string
  apellido: string
  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.nombre = this.rutaActiva.snapshot.paramMap.get("nombre")
    this.apellido = this.rutaActiva.snapshot.paramMap.get("apellido")
  }
}
