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
var platform_browser_1 = require('@angular/platform-browser');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
var user_component_1 = require('./user/user.component');
var event_drop_component_1 = require('./event-drops/event_drop.component');
var navigation_component_1 = require('./navigation/navigation.component');
var basic_details_component_1 = require('./basic-details/basic-details.component');
var bp_chart_component_1 = require('./basic-details/charts/bp-chart.component');
var fit_bit_component_1 = require('./fit-bit/fit-bit.component');
var step_chart_component_1 = require('./fit-bit/charts/step-chart/step-chart.component');
var highlight_directive_1 = require('./shared/highlight.directive');
var dynamic_component_1 = require('./dynamic/dynamic.component');
var compute_tree_component_1 = require('./compute-tree/compute-tree.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.AppRoutingModule],
            declarations: [app_component_1.AppComponent, user_component_1.UserComponent, highlight_directive_1.HighlightDirective, event_drop_component_1.EventDropComponent, navigation_component_1.NavigationComponent, basic_details_component_1.BasicDetailsComponent, bp_chart_component_1.BpChartComponent, fit_bit_component_1.FitBitComponent, step_chart_component_1.StepChartComponent, dynamic_component_1.DynamicComponent, compute_tree_component_1.ComputeTreeComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map