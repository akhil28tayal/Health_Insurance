import { NgModule } from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser' ;

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component' ;
import { UserComponent } from './user/user.component';
import { EventDropComponent } from './event-drops/event_drop.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BasicDetailsComponent } from './basic-details/basic-details.component' ;
import { BpChartComponent } from './basic-details/charts/bp-chart.component' ;
import { FitBitComponent } from './fit-bit/fit-bit.component';
import { StepChartComponent } from './fit-bit/charts/step-chart/step-chart.component';
import { HighlightDirective } from './shared/highlight.directive' ;
import { DynamicComponent } from './dynamic/dynamic.component';
import { ComputeTreeComponent } from './compute-tree/compute-tree.component';

@NgModule({
    imports: [ BrowserModule, AppRoutingModule ],
    declarations: [ AppComponent, UserComponent, HighlightDirective, EventDropComponent, NavigationComponent, BasicDetailsComponent, BpChartComponent, FitBitComponent, StepChartComponent, DynamicComponent, ComputeTreeComponent ],
    bootstrap: [ AppComponent ] 
})

export class AppModule { }
