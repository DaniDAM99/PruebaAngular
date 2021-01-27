export class Usuario {
    nombre: string
    apellido: string
    edad?:number
    
    constructor(nombre?:string, apellido?:string) {
        this.nombre = nombre
        this.apellido = apellido
    }
}
