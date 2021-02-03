import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/clases/note';
import { NotasService } from 'src/app/servicios/notas.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit {
  temporizador: any = null
  notaSeleccionada: Note = new Note
  success_alert = false;
  error_alert = false;
  formNuevo: FormGroup = new FormGroup({
    id: new FormControl(),
    titulo: new FormControl('',[Validators.required]),
    contenido: new FormControl('',[Validators.required])
  })
  busqueda: string
  notas: Note[] = []
  notaNueva: Note = new Note
  constructor(private servicio:NotasService) { 

  }

  ngOnInit(): void {
    this.obtenerNotas()
  }

  obtenerNotas(): void {
    this.servicio.leerNotas().subscribe(
      respuesta => {
        console.log(respuesta)
        this.notas = respuesta
      },
      error => console.log(error)
    )
  }
  crearNota(entrada:Note): void {
    this.servicio.insertarNota(entrada).subscribe(
      respuesta => {
        console.log(respuesta)
        this.formNuevo.reset()
        this.obtenerNotas()
        this.mostrarAlert('success')
      },
      error => {console.log(error)}
    )
  }
  eliminarNota(): void {
    this.servicio.borrarNota(this.formNuevo.value.id).subscribe(
      respuesta => {console.log(respuesta)
      this.formNuevo.reset()
      this.obtenerNotas()
      },
      error => {console.log(error)}
    )
  }
  editarNota(): void {
    this.servicio.editarNota(this.formNuevo.value).subscribe(
      respuesta => {
        console.log(respuesta)
        this.notaSeleccionada = new Note
        this.obtenerNotas()
      },
      error => {console.log(error)}
    )
  }

  buscarNota(): void {
    this.servicio.buscarNotas(this.busqueda).subscribe(
      respuesta => {
        console.log(respuesta)
        this.notas = respuesta
      },
      error => {console.log(error)}
    )
  }

  buscarConRetraso(): void {
    if(this.temporizador == null) {
      this.temporizador = setTimeout(() => {
        this.buscarNota()
        this.temporizador=null
      }, 2500)
    }
  }

  mostrarAlert(str: string) {
    switch(str) {
      case "success":
        this.success_alert = true;
        setTimeout(() => (this.success_alert = false), 2500)
        break;
      case "error":
        this.error_alert = true;
        setTimeout(() => (this.error_alert = false), 2500)
        break;
    }
  }
}
