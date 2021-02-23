import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dni'
})
export class DniPipe implements PipeTransform {
  
  transform(value: number, ...args: unknown[]): unknown {
    if (value < 99999999 && value>0){
      const letras = "TRWAGMYFPDXBNJZSQVHLCKET"
      return value + letras[value%23]
    }
    else return null;
  }

}
