"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var step_chart_model_1 = require('./step-chart.model');
var StepChartComponent = (function () {
    function StepChartComponent(zone) {
        this.zone = zone;
    }
    StepChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return zingchart.render(_this.stepChart); });
    };
    StepChartComponent.prototype.ngOnDestroy = function () {
        zingchart.exec(this.stepChart.id, 'destroy');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', step_chart_model_1.StepChart)
    ], StepChartComponent.prototype, "stepChart", void 0);
    StepChartComponent = __decorate([
        core_1.Component({
            selector: 'step-chart',
            template: '<div id={{stepChart.id}}></div>'
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], StepChartComponent);
    return StepChartComponent;
}());
exports.StepChartComponent = StepChartComponent;
//# sourceMappingURL=step-chart.component.js.map