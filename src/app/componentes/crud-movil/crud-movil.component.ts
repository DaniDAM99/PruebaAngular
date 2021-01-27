import { Component, OnInit } from '@angular/core';
import { Movil } from 'src/app/clases/movil';

@Component({
  selector: 'app-crud-movil',
  templateUrl: './crud-movil.component.html',
  styleUrls: ['./crud-movil.component.css']
})
export class CrudMovilComponent implements OnInit {
  movil: Movil = new Movil()
  movilSeleccionado: Movil = new Movil()
  indice: number = 0
  moviles: Movil[] = []

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("crudMoviles") != null) {
      this.moviles = JSON.parse(localStorage.getItem("crudMoviles"))
      console.log(JSON.stringify(this.moviles))
      this.indice = this.moviles[this.moviles.length - 1].id
    }
  }

  insertar() {
    this.indice++
    this.movil.id = this.indice
    this.moviles.push(this.movil)
    localStorage.setItem("crudMoviles", JSON.stringify(this.moviles))
    this.movil = new Movil()
  }

  editar() {
    for(let i in this.moviles) {
      if(this.moviles[i].id == this.movilSeleccionado.id) {
        this.moviles[i].modelo = this.movilSeleccionado.modelo
        this.moviles[i].marca = this.movilSeleccionado.marca
        this.moviles[i].precio = this.movilSeleccionado.precio
        this.movilSeleccionado = new Movil()
        localStorage.setItem("crudMoviles", JSON.stringify(this.moviles))
        break
      }
    }
  }

  borrar() {
    for(let i in this.moviles) {
      if(this.moviles[i].id == this.movilSeleccionado.id) {
        this.moviles.splice(parseInt(i),1)
        localStorage.setItem("crudMoviles", JSON.stringify(this.moviles))
        break
      }
    }
  }
}
