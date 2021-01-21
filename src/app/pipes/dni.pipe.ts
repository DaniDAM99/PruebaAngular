import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dni'
})
export class DniPipe implements PipeTransform {
  posicion: number
  letras: string="TRWAGMYFPDXBNJZSQVHLCKET";
  letra: string = ""
  transform(value: number, ...args: unknown[]): unknown {
    this.posicion = value % 23;
    this.letra = this.letras.charAt(this.posicion);
    return this.letra;
  }

}
