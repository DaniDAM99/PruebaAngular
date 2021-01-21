import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  num_entrada: number
  constructor(private irHacia:Router) { }

  ngOnInit(): void {
  }


  navegarHacia(entrada): void {
    this.irHacia.navigate(['/multiplicar/'+entrada]);
  }

}
