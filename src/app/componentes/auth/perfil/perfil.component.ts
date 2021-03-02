import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { UserService } from 'src/app/servicios/user.service';
import { telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: User = {}
  constructor(private fb:FormBuilder,private servicioUsuario: UserService, private irHacia:Router) { }
  mostrarEditar: boolean = false
  mostrarEliminar: boolean = false
  inputBorrar: string = ""

  error = undefined

  formPerfil = this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:['', [Validators.required, Validators.minLength(4)]],
    password2:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined, [telefonoValido()]]
  })

  formImagen = this.fb.group({
    imagen: ['', Validators.required]
  })

  ngOnInit(): void {
    this.cargarPerfil()
  }

  cargarPerfil(): void {
    this.servicioUsuario.obtenerPerfil().subscribe(
      respuesta => {
        console.log(respuesta)
        this.perfil = respuesta
        this.formPerfil.patchValue(this.perfil)
      },
      error => {
        console.log(error)
        this.error = error;
      }
    )
  }

  editarPerfil(): void {
    this.servicioUsuario.editarPerfil(this.formPerfil.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
        this.mostrarEditar = false;
      }
    )
  }

  eliminarUsuario(): void {
    this.servicioUsuario.eliminarUsuario().subscribe(
      respuesta => {
        console.log(respuesta)
        this.servicioUsuario.logOut()
        this.irHacia.navigate(['/login'])
      },
      error => {
        console.log(error)
        this.error = error;
      }
    )
  }

  subirImagen(): void {
    const formData = new FormData()
    formData.append("imagen", this.formImagen.get('imagen').value)
    
    this.servicioUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
      },
      error => {
        console.log(error)
        this.error = error;
      }
    )
  }

  cambiaImagen(evento): void {
    if(evento.target.files) {
      this.formImagen.get('imagen').setValue(evento.target.files[0])
    }
  }

  foto: File
  tengoFoto(evento): void {
    if(evento.target.files) {
      this.foto = evento.target.files[0]
    }
  }

  subirFoto() {
    const formData = new FormData()
    formData.append('imagen', this.foto)
    this.servicioUsuario.subirImagen(formData).subscribe(
      respuesta => {
        console.log(respuesta)
        this.cargarPerfil()
      },
      error => {
        console.log(error)
        this.error = error
      }
    )
  }
}
