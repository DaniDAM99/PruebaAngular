import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  constructor(private fb:FormBuilder, private servicioUsuario:UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.servicioUsuario.login(this.formLogin.value).subscribe(
      response => {
        console.log(response)
        this.servicioUsuario.guardarToken(response)
      },
      error => console.log(error)
    )
  }
  
}
