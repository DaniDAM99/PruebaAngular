import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
  name: 'numeros'
})
export class NumerosPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if(args[0]=="cuadrado") { 
      return value*value;
    }
    else if(args[0]=="raiz") {
      return Math.sqrt(value)
    }
    else if(args[0]=="aletras") {
      switch(value) {
        case 0:
          return "cero"
        case 1:
          return "uno"
        case 2:
          return "dos"
        case 3:
          return "tres"
        case 4:
          return "cuatro"
        case 5:
          return "cinco"
        case 6:
          return "seis"
        case 7:
          return "siete"
        case 8:
          return "ocho"
        case 9:
          return "nueve"
        default:
          return "Solo números del 0 al 9"
      }
    }
  }

}
