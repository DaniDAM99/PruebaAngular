import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { telefonoValido, dniValido } from 'src/app/validaciones/validaciones';
import { UserService } from 'src/app/servicios/user.service';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister = this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:['', [Validators.required, Validators.minLength(4)]],
    password2:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined, [telefonoValido()]],
    dni:['', [Validators.required/*,dniValido()*/]],
  })

  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }

  ngOnInit(): void {
    if(this.servicioUsuario.isLogged()) {
      this.irHacia.navigate(['/perfil'])
    }
  }

  submit() {
    if (this.formRegister.value.password == this.formRegister.value.password2) {
      this.servicioUsuario.registrar(this.formRegister.value).subscribe(
        respuesta => {
          console.log(respuesta)
          this.servicioUsuario.guardarToken(respuesta)
          this.irHacia.navigate(['/perfil'])
        },
        error => console.log(error)
      )
    }
    else {
      alert('Las contraseñas no coinciden')
    }
  }


}
