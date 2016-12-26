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
var user_service_1 = require('../user/user.service');
var BasicDetailsComponent = (function () {
    function BasicDetailsComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.userService.getUserDetails()
            .then(function (users) {
            _this.users = users;
            _this.user = users[0];
        });
    }
    BasicDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'basic-details',
            templateUrl: './basic-details.component.html',
            styleUrls: ['./basic-details.component.css']
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], BasicDetailsComponent);
    return BasicDetailsComponent;
}());
exports.BasicDetailsComponent = BasicDetailsComponent;
//# sourceMappingURL=basis-details.component.js.map