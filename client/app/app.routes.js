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
var router_1 = require('@angular/router');
var user_component_1 = require('./user/user.component');
var basic_details_component_1 = require('./basic-details/basic-details.component');
var fit_bit_component_1 = require('./fit-bit/fit-bit.component');
var dynamic_component_1 = require('./dynamic/dynamic.component');
var compute_tree_component_1 = require('./compute-tree/compute-tree.component');
var routes = [
    { path: 'user', component: user_component_1.UserComponent,
        children: [
            { path: 'basic-details', component: basic_details_component_1.BasicDetailsComponent },
            { path: 'fit-bit', component: fit_bit_component_1.FitBitComponent },
            { path: 'dynamic', component: dynamic_component_1.DynamicComponent },
            { path: 'compute-premium', component: compute_tree_component_1.ComputeTreeComponent },
            { path: '', redirectTo: 'basic-details', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: 'user', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app.routes.js.map