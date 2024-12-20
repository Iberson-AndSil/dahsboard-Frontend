import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ProductService } from "./services/product.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, BarChartComponent, LineChartComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  change: boolean = false;
  products: string[] = ['Leche', 'Arroz', 'Papa', 'Azucar', 'Fideos'];
  selectedOption: string = '';
  data: any;

  constructor(private product: ProductService ) {}
  
    ngOnInit(): void {
      this.product.getData().subscribe(
        (response) => {
          this.data = response;
          console.log(this.data);
        },
        (error) => {
          console.error(error);
        }
      );
    }
}
