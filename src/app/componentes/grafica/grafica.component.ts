import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  constructor() { }
  input1: number
  input2: number

  grafica: Chart

  ngOnInit(): void {
    this.grafica = new Chart('posicionGrafica', {
      type: 'line',
			data: {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
				datasets: [{
					label: 'My First dataset',
					backgroundColor: 'red',
					borderColor: 'red',
					data: [15,3,6,5,8,9,46],
					fill: false,
				}, {
					label: 'My Second dataset',
					fill: false,
					backgroundColor: 'blue',
					borderColor: 'blue',
					data: [5,8,20,3,2,44,35],
				}]
			},
			options: {
				responsive: true,
				title: {
					display: true,
					text: 'TÍTULO'
				},
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
			}
    })
  }

  insertarDatos() {
    this.grafica.data.labels.push(this.grafica.data.labels.length-1)
    this.grafica.data.datasets[0].data.push(this.input1);
    this.grafica.data.datasets[1].data.push(this.input2);
    this.grafica.update()
  }
}
