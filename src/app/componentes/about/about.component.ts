import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  nombre: String
  apellido: String

  constructor(private irHacia:Router) { }

  ngOnInit(): void {
  }

  mostrarSaludo() {
    this.irHacia.navigate(['/saludoRutaDinamica/' + this.nombre + "/" + this.apellido])
  }

}
