import { AbstractControl, ValidatorFn } from "@angular/forms";

export function telefonoValido(): ValidatorFn {
    return (telefono: AbstractControl): {[key:string]:any} | null=>{
        const numTelefono = telefono.value
        if(numTelefono>600000000 && numTelefono<999999999) {
            return null
        }
        return {telefono: "inválido"}
    }
}

export function dniValido(): ValidatorFn {
    return (dni: AbstractControl): {[key:string]:any} | null=>{
        const letras = "TRWAGMYFPDXBNJZSQVHLCKET"
        const numero = dni.value.match(/\d+/g)
        let letra = dni.value.match(/[a-z]/gi)
        const letra_corracta = letras[numero%23]

        if(letra == null) {
            return {dni: "Falta la letra"}
        }
        else {
            letra = letra.join().toUperCase()
        }

        if(letra_corracta == letra) {
            return null
        }
        return {dni: "inválido"}
    }
}