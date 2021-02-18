import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
const url = 'http://localhost/backendphp/mensajes/'
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http:HttpClient) { }

  mostrarMensaje(): Observable<any> {
    return this.http.get(url)
  }

  insertarMensaje(mensaje): Observable<any> {
    return this.http.post(url, mensaje)
  }

  borrarMensaje(id): Observable<any> {
    return this.http.delete(url+id)
  }
}
