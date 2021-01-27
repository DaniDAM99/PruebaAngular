import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/clases/nota';

@Component({
  selector: 'app-crud-local',
  templateUrl: './crud-local.component.html',
  styleUrls: ['./crud-local.component.css']
})
export class CrudLocalComponent implements OnInit {
  nota: Nota = new Nota()
  notas: Nota[] = []
  indice: number = 0
  notaSeleccionada: Nota = new Nota()

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("crudLocal") != null) {
      this.notas = JSON.parse(localStorage.getItem("crudLocal"))
      this.indice = this.notas[this.notas.length - 1].id
    }
  }

  insertar() {
    this.indice++
    this.nota.id = this.indice
    this.notas.push(this.nota)
    this.nota = new Nota()
    localStorage.setItem("crudLocal", JSON.stringify(this.notas))
  }

  actualizar() {
    for(let i in this.notas) {
      if(this.notas[i].id == this.notaSeleccionada.id) {
        this.notas[i].titulo = this.notaSeleccionada.titulo
        this.notas[i].contenido = this.notaSeleccionada.contenido
        this.notaSeleccionada = new Nota()
        localStorage.setItem("crudLocal", JSON.stringify(this.notas))
        break
      }
    }
  }

  borrar() {
    for(let i in this.notas) {
      if(this.notas[i].id == this.notaSeleccionada.id) {
        this.notas.splice(parseInt(i), 1)
        localStorage.setItem("crudLocal", JSON.stringify(this.notas))
        break
      }
    }
  }

}
