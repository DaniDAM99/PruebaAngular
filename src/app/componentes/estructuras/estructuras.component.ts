import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {
  verdad: boolean = false;
  edad: number = 0

  num1: number = 0
  num2: number = 0
  operaciones: string[] = ["+", "-", "*", "/"]
  operador: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  muestralog(indice:number,impar:number,primero:boolean,ultimo:boolean) {
    console.log("Índice: " + indice)
    console.log(impar? "Posición impar": "Posición par")
    if(primero)
      console.log("Priemer elemento del array")
    if(ultimo)
      console.log("ultimo elemento del array")
  }

}
