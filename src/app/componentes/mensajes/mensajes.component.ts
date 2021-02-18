import { Component, OnInit } from '@angular/core';
import { Mensajes } from 'src/app/clases/mensajes';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(private servicioMensaje: MensajesService) { }
  mensajes: Mensajes[]
  ngOnInit(): void {
    this.obtenerMensaje()
  }

  obtenerMensaje() {
    this.servicioMensaje.mostrarMensaje().subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensajes = respuesta
      },
      error => console.log(error)
    )
  }

}
