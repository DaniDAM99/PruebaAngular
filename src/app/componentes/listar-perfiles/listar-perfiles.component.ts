import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';
import { FormBuilder, Validators } from '@angular/forms';
import { MensajesService } from 'src/app/servicios/mensajes.service';

@Component({
  selector: 'app-listar-perfiles',
  templateUrl: './listar-perfiles.component.html',
  styleUrls: ['./listar-perfiles.component.css']
})
export class ListarPerfilesComponent implements OnInit {

  constructor(private servicioUsuario: UserService, private fb: FormBuilder, private servicioMensaje: MensajesService) { }

  perfiles: User[] = []
  usuarioSeleccionado: User
  userSelect = false;
  success_alert = false
  
  error: undefined
  respuesta: undefined

  formMensaje = this.fb.group({
    idDestinatario: [''],
    mensaje: ['', [Validators.required]]
  })

  ngOnInit(): void {
    this.obtenerPerfiles()
  }

  obtenerPerfiles(): void {
    this.servicioUsuario.obtenerUsuarios().subscribe(
      respuesta => {
        console.log(respuesta);
        this.perfiles = respuesta
      },
      error => console.log(error)
    )
  }

  escribirMensaje(): void {
    console.log(JSON.stringify(this.formMensaje.value))
    this.servicioMensaje.insertarMensaje(this.formMensaje.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.respuesta = respuesta
        this.success_alert = true;
        setTimeout(() => (this.success_alert = false), 2500)
      },
      error => {
        console.log(error)
        this.error = error
      }
    )
  }

}
