import { AbstractControl, ValidatorFn } from "@angular/forms";

export function telefonoValido(): ValidatorFn {
    return (telefono: AbstractControl): {[key:string]:any} | null=>{
        const numTelefono = telefono.value
        if(numTelefono>600000000 && numTelefono<999999999) {
            return null
        }
        return {telefono: "invalido"}
    }
}

export function dniValido(): ValidatorFn {
    return (dni: AbstractControl): {[key:string]:any} | null=>{
        const dni_comporbar = dni.value
        const dni_regex = '/^(\d{8})([A-Z])$/'
        if(dni_comporbar.match(dni_regex)) {
            return null
        }
        return {dni: "invalido"}
    }
}