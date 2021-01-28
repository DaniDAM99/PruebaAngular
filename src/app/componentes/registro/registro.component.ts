import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formRegister: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dni: new FormControl('', [Validators.required]),
    telefono: new FormControl(undefined, [])
  })

  formRegister2 = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellidos: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(1)]],
    email: ['', [Validators.required, Validators.email]],
    dni: ['', [Validators.required, dniValido()]],
    telefono: [undefined, telefonoValido()]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }


  evaluaForm(): void {
    console.log("Evaluando...")
    console.log(this.formRegister.getRawValue())
    if(this.formRegister.valid) {
      console.log("El formulario es correcto")
    }
    else {
      console.log("El formulario no es correcto")
    }
  }

  get nombre() {return this.formRegister.get('nombre')}
  get apellido() {return this.formRegister.get('apellido')}
  get password() {return this.formRegister.get('password')}
  get email() {return this.formRegister.get('email')}
  get dni() {return this.formRegister.get('dni')}
  get telefono() {return this.formRegister.get('telefono')}

}
