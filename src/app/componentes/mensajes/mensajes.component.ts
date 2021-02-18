import { Component, OnInit } from '@angular/core';
import { Mensajes } from 'src/app/clases/mensajes';
import { MensajesService } from 'src/app/servicios/mensajes.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(private servicioMensaje: MensajesService, private fb: FormBuilder) { }
  
  formEditar = this.fb.group({
    id: [''],
    idDestinatario: [''],
    mensaje: ['', [Validators.required]]
  })


  mensajesRecibidos: Mensajes[]
  mensajesEnviados: Mensajes[]
  mensajeSeleccionado: Mensajes

  ngOnInit(): void {
    this.obtenerMensajeRecibidos()
    this.obtenerMensajeEnviados()
  }

  obtenerMensajeRecibidos() {
    this.servicioMensaje.mostrarMensajeRecibidos().subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensajesRecibidos = respuesta
      },
      error => console.log(error)
    )
  }

  obtenerMensajeEnviados() {
    this.servicioMensaje.mostrarMensajeEnviados().subscribe(
      respuesta => {
        console.log(respuesta)
        this.mensajesEnviados = respuesta
      },
      error => console.log(error)
    )
  }

  editarMensaje() {
    console.log(this.formEditar.value)
    this.servicioMensaje.editarMensaje(this.formEditar.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.obtenerMensajeEnviados()
      },
      error => console.log(error)
    )
  }

  eliminarMensaje() {
    this.servicioMensaje.borrarMensaje(this.mensajeSeleccionado.id).subscribe(
      respuesta => {
        console.log(respuesta)
        this.obtenerMensajeEnviados()
      },
      error => console.log(error)
    )
  }

}
