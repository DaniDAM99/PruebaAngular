import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/servicios/user.service';
import { User } from 'src/app/clases/user';

@Component({
  selector: 'app-listar-perfiles',
  templateUrl: './listar-perfiles.component.html',
  styleUrls: ['./listar-perfiles.component.css']
})
export class ListarPerfilesComponent implements OnInit {

  constructor(private servicioUsuario: UserService) { }

  perfiles: User[] = []

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

}
