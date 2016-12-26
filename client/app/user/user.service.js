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
var user = [{
        name: "Akhil Tayal",
        age: 22,
        gender: "Male",
        address: "Banglore",
        height: 183,
        weight: 73.4,
        bloodPressure: {
            systolic: 120,
            diastolic: 80
        },
        exercise: 150,
        BMI: 70
    },
    {
        name: "Akhil",
        age: 22,
        gender: "Male",
        address: "Banglore",
        height: 183,
        weight: 73.4,
        bloodPressure: {
            systolic: 120,
            diastolic: 80
        },
        exercise: 150,
        BMI: 70
    }
];
var fitbit = {
    steps: 3852,
    distance: 5.6,
    calories: 2078,
    activity: {
        exercise: 125,
        sleep: 246,
        deepSleep: 190
    },
    exercise: [125, 145, 126, 171, 94, 166, 133]
};
var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUserDetails = function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(user);
            }, 500);
        });
    };
    UserService.prototype.getFitbitDetails = function () {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(fitbit);
            }, 500);
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map