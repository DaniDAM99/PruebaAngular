export interface User {
    id?: number
    nombre?: string
    apellidos?: string
    password?: string
    email?: string
    telefono?: number
    dni?: string
}

export interface accesoUsuario {
    email: string
    password: string
}