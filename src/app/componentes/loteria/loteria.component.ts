import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loteria',
  templateUrl: './loteria.component.html',
  styleUrls: ['./loteria.component.css']
})
export class LoteriaComponent implements OnInit {

  constructor() { }
  boton_pulsado: boolean = false
  ngOnInit(): void {
  }

}
