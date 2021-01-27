import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-formulario-clase',
  templateUrl: './formulario-clase.component.html',
  styleUrls: ['./formulario-clase.component.css']
})
export class FormularioClaseComponent implements OnInit {
  user: Usuario = new Usuario()
  users: Usuario[] = []
  constructor() { }

  usu: Usuario = new Usuario

  usu3: Usuario = new Usuario("Daniel", "Muresan")

  ngOnInit(): void {
  }

  insertar() {
    this.users.push(this.user);
    this.user = new Usuario
    localStorage.setItem('backup', JSON.stringify(this.user))
  }

  mostrar(usu) {
    this.usu = usu;
  }
}
