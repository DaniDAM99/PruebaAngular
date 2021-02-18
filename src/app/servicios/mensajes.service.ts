import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
const url = 'http://localhost/backendphp/mensajes/'
@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http:HttpClient) { }

  mostrarMensajeRecibidos(): Observable<any> {
    return this.http.get(url)
  }

  mostrarMensajeEnviados(): Observable<any> {
    return this.http.get(url+"sent")
  }

  insertarMensaje(mensaje): Observable<any> {
    return this.http.post(url, mensaje)
  }

  editarMensaje(mensaje): Observable<any> {
    return this.http.put(url, mensaje)
  }

  borrarMensaje(id): Observable<any> {
    return this.http.delete(url+id)
  }
}
