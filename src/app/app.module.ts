import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routes';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { MapsComponent } from './components/maps/maps.component';
import { ChartsComponent } from './components/charts/charts.component';
import { UiElementsComponent } from './components/ui-elements/ui-elements.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetsComponent,
    MapsComponent,
    ChartsComponent,
    UiElementsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
