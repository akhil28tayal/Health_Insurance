import { Component, NgZone, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { StepChart } from './step-chart.model';

declare var zingchart ;

@Component({
    selector: 'step-chart',
    template: '<div id={{stepChart.id}}></div>'
})

export class StepChartComponent {
    @Input()
    stepChart : StepChart ;

    constructor (private zone: NgZone) { }

	ngAfterViewInit () {
		this.zone.runOutsideAngular(() => zingchart.render(this.stepChart));
	}

	ngOnDestroy () {
		zingchart.exec(this.stepChart.id, 'destroy');
	} 

}
