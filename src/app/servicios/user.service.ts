import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, accesoUsuario } from '../clases/user';
import { Observable } from 'rxjs';

//const url = 'http://localhost:3000/user/'
const url = 'http://localhost/backendphp/user/'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(user: accesoUsuario): Observable<any> {
    return this.http.post(url+'login/', user)
  }

  registrar(user: User): Observable<any> {
    return this.http.post(url, user)
  }

  obtenerPerfil(): Observable<any> {
    return this.http.get(url)
  }

  editarPerfil(usuario: User): Observable<any> {
    return this.http.put(url, usuario)
  }

  eliminarUsuario(): Observable<any> {
    return this.http.delete(url)
  }

  subirImagen(entrada): Observable<any> {
    return this.http.post(url+'image/', entrada)
  }

  guardarToken(token: string) {
    localStorage.setItem('user_token', token)
  }

  leerToken(): string {
    return localStorage.getItem('user_token')
  }

  isLogged(): boolean {
    return !!localStorage.getItem('user_token')
  }

  logOut(): void {
    localStorage.removeItem('user_token')
  }

}
