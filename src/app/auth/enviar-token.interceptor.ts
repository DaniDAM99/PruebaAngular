import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserService } from '../servicios/user.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators'

@Injectable()
export class EnviarTokenInterceptor implements HttpInterceptor {

  constructor(private servicioUsuario:UserService, private irHacia:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let peticion =request;
    if (this.servicioUsuario.isLogged()){
      peticion =request.clone({
      setHeaders: {Authorization: this.servicioUsuario.leerToken()}
    })
    }
    return next.handle(peticion).pipe(
      catchError((err: HttpErrorResponse)=>{
        if (err.status===401){
          this.servicioUsuario.logOut()
          this.irHacia.navigate(['/login'])
        }
        return throwError(err)
      })
    )
  }
}
