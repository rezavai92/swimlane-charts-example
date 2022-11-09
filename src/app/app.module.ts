import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BasicPieChartComponent } from './components/basic-pie-chart/basic-pie-chart.component';
import { AdvancedPieChartComponent } from './components/advanced-pie-chart/advanced-pie-chart.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LineChartComponent } from './components/line-chart/line-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    BasicPieChartComponent,
    AdvancedPieChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
