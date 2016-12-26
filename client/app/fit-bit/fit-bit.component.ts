import { Component, OnInit } from '@angular/core';
import  { StepChart } from './charts/step-chart/step-chart.model';
import { UserService } from '../user/user.service';
import { FitBit } from '../user/user';

@Component({
    moduleId: module.id,
    selector: '<fit-bit></fit-bit>',
    templateUrl: './fit-bit.component.html',
    styleUrls: ['./fit-bit.component.css']
})

export class FitBitComponent implements OnInit {
    stepChart : StepChart ;
    distanceChart : StepChart ;
    caloriesChart : StepChart ;
    activityChart : StepChart ;
    exerciseChart : StepChart ;
    fitbit : FitBit ;

    constructor(private userService: UserService){ }

    ngOnInit(): void {
        this.userService.getFitbitDetails()
                        .then(fitbit => {
                            this.fitbit = fitbit ;
                        })
                        .then(()=>{
                            this.stepChart = {
                                id : 'stepChart',
                                data : {
                                            "type":"pie",
                                            "height":"90%",
                                            "width":"90%",
                                            "x":"10%",
                                            "y":"5%",
                                            "background-color":"#ffffff",
                                            "border-radius":4,
                                            "title":{
                                                "text":"Steps",
                                                "text-align":"left",
                                                "background-color":"none",
                                                "font-color":"#cdcdcd",
                                                "font-size":"18px",
                                                "offset-y":"10%",
                                                "offset-x":"10%"
                                            },
                                            "value-box":{
                                                "visible":true
                                            },
                                            "plotarea":{
                                                "margin":"20% 0% 0% 0%"
                                            },
                                            "plot":{
                                                "slice":50,
                                                "ref-angle":270,
                                                "detach":false,
                                                "hover-state":{
                                                    "visible":false
                                                },
                                                "value-box":{
                                                    "visible":true,
                                                    "type":"first",
                                                    "connected":false,
                                                    "placement":"center",
                                                    "text":"%v",
                                                    "rules":[
                                                        {
                                                            "rule":"%v < 3850",
                                                            "visible":false
                                                        }
                                                    ],
                                                    "font-color":"#000000",
                                                    "font-size":"20px"
                                                },
                                                "tooltip":{
                                                    "rules":[
                                                        {
                                                            "rule":"%i == 0",
                                                            "text":"%v %t Completed",
                                                            "shadow":false,
                                                            "border-radius":4
                                                        },
                                                        {
                                                            "rule":"%i == 1",
                                                            "text":"%v Remaining",
                                                            "shadow":false,
                                                            "border-radius":4
                                                        }
                                                    ]
                                                },
                                                            "animation":{
                                                                "delay":0,
                                                                "effect":2,
                                                                "speed":"600",
                                                                "method":"0",
                                                                "sequence":"1"
                                                            }
                                                },
                                                "series":[
                                                            {
                                                                "values":[this.fitbit.steps],
                                                                "text":"Steps",
                                                                "background-color":"#00baf0",
                                                                "border-width":"0px",
                                                                "shadow":0
                                                            },
                                                            {
                                                                "values":[(5000-this.fitbit.steps)],
                                                                "background-color":"#dadada",
                                                                "alpha":"0.5",
                                                                "border-color":"#dadada",
                                                                "border-width":"1px",
                                                                "shadow":0
                                                            }
                                                        ]

                                },
                                height: '55%',
                                width: '95%',
                            }

                            this.distanceChart = {
                                id : 'distanceChart',
                                data : {
                                            "type":"pie",
                                            "height":"90%",
                                            "width":"90%",
                                            "x":"10%",
                                            "y":"5%",
                                            "background-color":"#ffffff",
                                            "border-radius":4,
                                            "title":{
                                                "text":"<strong>Distance</strong> / Miles",
                                                "text-align":"left",
                                                "background-color":"none",
                                                "font-color":"#cdcdcd",
                                                "font-size":"18px",
                                                "offset-y":"10%",
                                                "offset-x":"10%"
                                            },
                                            "value-box":{
                                                "visible":true
                                            },
                                            "plotarea":{
                                                "margin":"20% 0% 0% 0%"
                                            },
                                            "plot":{
                                                "slice":50,
                                                "ref-angle":270,
                                                "detach":false,
                                                "hover-state":{
                                                    "visible":false
                                                },
                                                "value-box":{
                                                    "visible":true,
                                                    "type":"first",
                                                    "connected":false,
                                                    "placement":"center",
                                                    "text":"%v",
                                                    "rules":[
                                                        {
                                                            "rule":"%v < 5.6",
                                                            "visible":false
                                                        }
                                                    ],
                                                    "font-color":"#000000",
                                                    "font-size":"20px"
                                                },
                                                "tooltip":{
                                                    "rules":[
                                                        {
                                                            "rule":"%v == 5.6",
                                                            "text":"%v %t Completed",
                                                            "shadow":false,
                                                            "border-radius":4
                                                        },
                                                        {
                                                            "rule":"%v == 4.4",
                                                            "text":"%v Remaining",
                                                            "shadow":false,
                                                            "border-radius":4
                                                        }
                                                    ]
                                                },
                                                            "animation":{
                                                                "delay":0,
                                                                "effect":2,
                                                                "speed":"600",
                                                                "method":"0",
                                                                "sequence":"1"
                                                            }
                                                },
                                                "series":[
                                                    {
                                                        "values":[this.fitbit.distance],
                                                        "text":"Miles",
                                                        "background-color":"#8AB839",
                                                        "border-width":"0px",
                                                        "shadow":0
                                                    },
                                                    {
                                                        "values":[(10-this.fitbit.distance)],
                                                        "background-color":"#dadada",
                                                        "alpha":"0.5",
                                                        "border-color":"#dadada",
                                                        "border-width":"1px",
                                                        "shadow":0
                                                    }
                                                ]
                                        },
                                        height: '55%',
                                        width: '95%',
                            }        

                            this.caloriesChart = {
                                id : 'CaloriesChart',
                                data : {
                                            "type":"pie",
                                            "height":"90%",
                                            "width":"90%",
                                            "x":"10%",
                                            "y":"5%",
                                            "background-color":"#ffffff",
                                            "border-radius":4,
                                            "title":{
                                                "text":"Calories",
                                                "text-align":"left",
                                                "background-color":"none",
                                                "font-color":"#cdcdcd",
                                                "font-size":"18px",
                                                "offset-y":"10%",
                                                "offset-x":"10%"
                                            },
                                            "value-box":{
                                                "visible":true
                                            },
                                            "plotarea":{
                                                "margin":"20% 0% 0% 0%"
                                            },
                                            "plot":{
                                                "slice":50,
                                                "ref-angle":270,
                                                "detach":false,
                                                "hover-state":{
                                                    "visible":false
                                                },
                                                "value-box":{
                                                    "visible":true,
                                                    "type":"first",
                                                    "connected":false,
                                                    "placement":"center",
                                                    "text":"%v",
                                                    "rules":[
                                                        {
                                                            "rule":"%v < 2078",
                                                            "visible":false
                                                        }
                                                    ],
                                                    "font-color":"#000000",
                                                    "font-size":"20px"
                                                },
                                                "tooltip":{
                                                    "rules":[
                                                        {
                                                            "rule":"%v == 2078",
                                                            "text":"%v %t Burned",
                                                            "shadow":false,
                                                            "border-radius":4
                                                        },
                                                        {
                                                            "rule":"%v == 422",
                                                            "text":"%v Remaining",
                                                            "shadow":false,
                                                            "border-radius":4
                                                        }
                                                    ]
                                                },
                                                "animation":{
                                                    "delay":0,
                                                    "effect":2,
                                                    "speed":"600",
                                                    "method":"0",
                                                    "sequence":"1"
                                                }
                                            },
                                            "series":[
                                                {
                                                    "values":[this.fitbit.calories],
                                                    "text":"Calories",
                                                    "background-color":"#FABE28",
                                                    "border-width":"0px",
                                                    "shadow":0
                                                },
                                                {
                                                    "values":[2500 - this.fitbit.calories],
                                                    "background-color":"#dadada",
                                                    "alpha":"0.5",
                                                    "border-color":"#dadada",
                                                    "border-width":"1px",
                                                    "shadow":0
                                                }
                                            ]
                                        },
                                height: '55%',
                                width: '95%',
                            }

                            this.activityChart = {
                                id : 'ActivityChart',
                                data: {
                                        "type": "hbar",
                                        "height": "59%",
                                        "background-color": "#363b42",
                                        "border-color": "#111a21",
                                        "border-width": "2px",
                                        "title": {
                                            "margin-top": "10px",
                                            "margin-left": "20px",
                                            "text": "Activity",
                                            "color": "#ffffff",
                                            "shadow": 0,
                                            "text-align": "left",
                                            "font-size": "18px"
                                        },
                                        "scale-y": {
                                            "line-color": "none",
                                            "tick": {
                                                "visible": false
                                            },
                                            "item": {
                                                "visible": false
                                            },
                                            "guide": {
                                                "visible": false
                                            }
                                        },
                                        "scale-x": {
                                            "values": [
                                                "Deep Sleep",
                                                "Sleep",
                                                "Exercise"
                                            ],
                                            "line-color": "none",
                                            "tick": {
                                                "visible": false
                                            },
                                            "item": {
                                                "width": 200,
                                                "text-align": "left",
                                                "offset-x": 210,
                                                "color": "#fff"
                                            },
                                            "guide": {
                                                "visible": false
                                            }
                                        },
                                        "plot": {
                                            "bars-overlap": "100%",
                                            "bar-width": "17px",
                                            "thousands-separator": ",",
                                            "animation": {
                                                "effect": "ANIMATION_SLIDE_BOTTOM"
                                            }
                                        },
                                        "plotarea": {
                                            "margin": "50px 25px 20px 25px"
                                        },
                                        "series": [
                                            {
                                                "values": [this.fitbit.activity.deepSleep, this.fitbit.activity.sleep, this.fitbit.activity.exercise ],
                                                "z-index": 2,
                                                "styles": [
                                                    {
                                                        "background-color": "#009016"
                                                    },
                                                    {
                                                        "background-color": "#017790"
                                                    },
                                                    {
                                                        "background-color": "#ee5b18"
                                                    },
                                                ],
                                                "tooltip": {
                                                    "shadow": false
                                                },
                                                "tooltip-text": "%node-value mins",
                                                "hover-state": {
                                                    "visible": false
                                                }
                                            },
                                            {
                                                "max-trackers": 0,
                                                "values": [
                                                    720,
                                                    720,
                                                    720
                                                ],
                                                "data-rvalues": [
                                                    this.fitbit.activity.deepSleep,
                                                    this.fitbit.activity.sleep,
                                                    this.fitbit.activity.exercise                                                    
                                                ],
                                                "background-color": "#cdcdcd",
                                                "border" : '1px',
                                                "borderColor": '#cdcdcd',
                                                "z-index": 1,
                                                "value-box": {
                                                    "visible": true,
                                                    "offset-y": "-1px",
                                                    "offset-x": "3px",
                                                    "placement": "top-in",
                                                    "text-align": "right",
                                                    "font-color": "#fff",
                                                    "font-size": "10px",
                                                    "text": "%data-rvalues mins"
                                                }
                                            }
                                        ]
                                    },
                                        height: '95%',
                                        width: '100%',
                                
                            }
                            
                            this.exerciseChart = {
                                id: 'exerciseChart',
                                data: {
                                    "type": "line",
                                    "height": "59%",
                                    "background-color": "#363b42",
                                    "border-color": "#111a21",
                                    "border-width": "2px",
                                    "title": {
                                            "margin-top": "10px",
                                            "margin-left": "20px",
                                            "text": "Exercise",
                                            "color": "#ffffff",
                                            "shadow": 0,
                                            "text-align": "left",
                                            "font-size": "18px"
                                        },
                                    "plot": {
                                        "tooltip": {
                                            "visible": false
                                        },
                                        "animation": {
                                            "effect": "ANIMATION_SLIDE_BOTTOM"
                                        },
                                        "tooltip-text": "Exercise: %v mins"
                                    },
                                    "plotarea": {
                                        "margin": "20% 10% 10% 10%"
                                    },
                                    "scale-y": {
                                        "values": "0:200:20",
                                        "line-color": "none",
                                        "guide": {
                                            "line-style": "solid",
                                            "line-color": "#7d8285",
                                            "line-width": "2px"
                                        },
                                        "tick": {
                                            "visible": false
                                        },
                                        "item": {
                                            "font-color": "#fff",
                                            "font-size": "10px",
                                            "padding-right": 5
                                        }
                                    },
                                    "scale-x": {
                                        "line-color": "#fff",
                                        "line-width": "1px",
                                        "values": [
                                            "Mon",
                                            "Tues",
                                            "Wed",
                                            "Thru",
                                            "Fri",
                                            "Sat",
                                            "Sun",
                                        ],
                                        "tick": {
                                            "line-color": "#fff",
                                            "line-width": "1px"
                                        },
                                        "guide": {
                                            "visible": false
                                        },
                                        "item": {
                                            "font-color": "#FFFFFF",
                                            "font-size": "10px",
                                            "padding-top": 5
                                        }
                                    },
                                    "crosshair-x": {
                                        "scale-label": {
                                            "font-color": "#000000"
                                        }
                                    },
                                    "series": [
                                                {
                                                    "values": this.fitbit.exercise ,
                                                    "text": "Exercise",
                                                    "line-color": "#c94742",
                                                    "line-width": "2px",
                                                    "shadow": 0,
                                                    "marker": {
                                                        "background-color": "#c94742",
                                                        "size": 4,
                                                        "border-width": 0,
                                                        "shadow": 0
                                                    },
                                                    "palette": 3
                                                }
                                            ]
                                        },
                                        height: '95%',
                                        width: '100%'
                                    }
                            

                        })
    }
}
