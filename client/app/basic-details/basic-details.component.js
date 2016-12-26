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
        this.userService = userService;
    }
    BasicDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserDetails().then(function (users) {
            _this.users = users;
            _this.user = users[0];
            _this.bpChart = {
                id: 'bp-chart',
                data: {
                    type: 'hbar',
                    plot: {
                        "value-box": {
                            "text": "%v mm",
                            "type": "all",
                            "placement": "top",
                            "angle": 0,
                            "font-color": "#cdcdcd"
                        },
                    },
                    plotarea: {
                        margin: '10% 10% 10% 15%'
                    },
                    "tooltip": {
                        "text": "%k Pressure<br/>= %vmm",
                        "font-color": "#000000",
                        "border-width": "1px",
                        "border-color": "#000000",
                        "border-radius": "4px",
                        width: '26%'
                    },
                    scaleX: {
                        values: ["Systolic", "Diastolic"]
                    },
                    scaleY: {
                        "values": "0:200:20",
                    },
                    series: [{
                            values: [_this.user.bloodPressure.systolic, _this.user.bloodPressure.diastolic],
                        }]
                },
                height: '45%',
                width: '95%',
            };
            _this.bmiChart = {
                id: 'BmiChart',
                data: {
                    type: "hbar",
                    backgroundColor: "#2A2B3A",
                    height: '26.5%',
                    tooltip: { visible: false },
                    scaleX: {
                        lineColor: "transparent",
                        tick: {
                            visible: false
                        },
                        labels: ["BMI"],
                        item: {
                            fontColor: "#e8e8e8",
                            fontSize: 16
                        }
                    },
                    scaleY: {
                        visible: false,
                        lineColor: "transparent",
                        guide: {
                            visible: false
                        },
                        tick: {
                            visible: false
                        }
                    },
                    plotarea: {
                        margin: '5% 5% 5% 10%'
                    },
                    plot: {
                        stacked: true,
                        barsSpaceLeft: "20px",
                        barsSpaceRight: "20px",
                        valueBox: {
                            visible: true,
                            text: "%v",
                            fontColor: "#2A2B3A"
                        },
                        tooltip: {
                            borderWidth: 0,
                            borderRadius: 2
                        },
                        animation: {
                            effect: 3,
                            sequence: 3,
                            method: 3
                        }
                    },
                    series: [
                        {
                            values: [_this.user.BMI],
                            borderRadius: "50px 0px 0px 50px",
                            backgroundColor: "#E71D36",
                        },
                        {
                            "max-trackers": 0,
                            "values": [
                                (100 - _this.user.BMI)
                            ],
                            "background-color": "#cdcdcd",
                            "border": '1px',
                            borderRadius: "0px 50px 50px 0px",
                            "borderColor": '#cdcdcd',
                            "z-index": 1
                        }
                    ]
                },
                height: '10%',
                width: '100%'
            };
        });
    };
    BasicDetailsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'basic-details',
            templateUrl: './basic-details.component.html',
            styleUrls: ['./basic-details.component.css'],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], BasicDetailsComponent);
    return BasicDetailsComponent;
}());
exports.BasicDetailsComponent = BasicDetailsComponent;
//# sourceMappingURL=basic-details.component.js.map