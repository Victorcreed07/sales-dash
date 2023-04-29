import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from '../components/header/header.component'
import {CardComponent} from '../components/card/card.component'
import {ChartComponent} from '../components/chart/chart.component'
import {SecondComponent} from '../components/second/second.component'
import {ThirdComponent} from '../components/third/third.component'
import {FirstComponent} from '../components/first/first.component'
import {ItemComponent} from '../components/item/item.component'
import {LineChartComponent} from '../components/line-chart/line-chart.component'
import {ContentComponent} from '../components/content/content.component'
import {Content2Component} from '../components/content2/content2.component'
import {Content3Component} from '../components/content3/content3.component'
import { AppRoutingModule } from './app-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';



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
    Content2Component,
    ThirdComponent,
    Content3Component,
    ItemComponent

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatDividerModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    NgApexchartsModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
