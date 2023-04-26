import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from '../components/header/header.component'
import {CardComponent} from '../components/card/card.component'
import {ChartComponent} from '../components/chart/chart.component'
import {SecondComponent} from '../components/second/second.component'
import {FirstComponent} from '../components/first/first.component'
import {LineChartComponent} from '../components/line-chart/line-chart.component'
import {ContentComponent} from '../components/content/content.component'
import {Content2Component} from '../components/content2/content2.component'
import { AppRoutingModule } from './app-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTableModule } from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    CardComponent,
    ChartComponent,
    LineChartComponent,
    SecondComponent,
    FirstComponent,
    Content2Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    NgApexchartsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
