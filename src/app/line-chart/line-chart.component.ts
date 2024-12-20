import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {
 
  // Atributo que almacena los datos del chart
  public chart!: Chart;
 
  ngOnInit(): void {
    // datos
    const data = {
      labels: ['Agosto','Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      datasets: [{
        label: 'Leche',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        borderWidth: 1
      },
      {
        label: 'Arroz',
        data: [28, 48, 40, 19, 86, 27, 90], // Datos de la segunda línea
        fill: false,
        borderColor: 'rgb(255, 99, 132)', // Color de la línea
        tension: 0.1,
        borderWidth: 1
      },
      {
        label: 'Papa',
        data: [18, 48, 77, 9, 100, 27, 40], // Datos de la tercera línea
        fill: false,
        borderColor: 'rgb(54, 162, 235)', // Color de la línea
        tension: 0.1,
        borderWidth: 1
      },
      {
        label: 'Azucar',
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100], // Datos aleatorios para la cuarta línea
        fill: false,
        borderColor: 'rgb(255, 159, 64)', // Color de la línea
        tension: 0.1,
        borderWidth: 1
      },
      {
        label: 'Fideos',
        data: [Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100], // Datos aleatorios para la quinta línea
        fill: false,
        borderColor: 'rgb(153, 102, 255)', // Color de la línea
        tension: 0.1,
        borderWidth: 1
      }
    ]
    };
    // Creamos la gráfica
    this.chart = new Chart("chart", {
      type: 'line' as ChartType, // tipo de la gráfica 
      data: data // datos 
    });
  }
}