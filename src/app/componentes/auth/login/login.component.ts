import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin = this.fb.group({
    email:[''],
    password:['']
  })
  mensaje: string = ""

  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.servicioUsuario.login(this.formLogin.value).subscribe(
      response => {
        console.log(response)
        this.servicioUsuario.guardarToken(response)
        this.irHacia.navigate(['/perfil'])
      },
      error => {
        console.log(error)
        this.mensaje = error.error.error
      }
    )
  }
  
}
