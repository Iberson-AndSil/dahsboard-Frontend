import { RouterModule,Routes } from '@angular/router';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

export const routes: Routes = [
    { path: 'line-chart', component: LineChartComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'line-chart'}
];
