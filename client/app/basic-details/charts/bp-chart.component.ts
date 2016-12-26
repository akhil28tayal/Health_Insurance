import { Component, NgZone, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Chart } from './bp-chart.model';

declare var zingchart ;

@Component({
    selector: 'bp-chart',
    template: '<div id={{bpChart.id}}></div>'
})

export class BpChartComponent {
    @Input()
    bpChart : Chart ;

    constructor (private zone: NgZone) { }

	ngAfterViewInit () {
		this.zone.runOutsideAngular(() => zingchart.render(this.bpChart));
	}

	ngOnDestroy () {
		zingchart.exec(this.bpChart.id, 'destroy');
	} 

}
