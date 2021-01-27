import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  variable:string = "Texto de prueba"

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    //alert("Adios")
  }

  num1:number = 0
  num2:number = 0
  letras:string[] = ["a","b","c","d","e"]
  usuarios = [{nombre:"Manolo", apellido:"Lopez"},
              {nombre:"Raul", apellido:"Salazar"},
              {nombre:"Jorge", apellido:"Casas"}]

  usuario2: Usuario[] = [{nombre:"Manolo", apellido:"Lopez"},
                        {nombre:"Raul", apellido:"Caravaca"},
                        {nombre:"Jorge", apellido:"Casas"}]
                        
  usu = {nombre:"",apellido:""}

  mostrarUsuario(usuario) {
    this.usu = usuario
  }



}
