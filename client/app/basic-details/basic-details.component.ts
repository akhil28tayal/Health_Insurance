import { Component, OnInit } from '@angular/core';

import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Chart } from './charts/bp-chart.model';

@Component({
    moduleId: module.id,
    selector: 'basic-details',
    templateUrl: './basic-details.component.html',
    styleUrls: ['./basic-details.component.css'],
    providers: [ UserService ]
})

export class BasicDetailsComponent implements OnInit {
    users: User[] ;
    user: User ;
    bpChart : Chart ;
    bmiChart : Chart ;
    constructor(private userService: UserService) { 
    }

    ngOnInit(): void{
        this.userService.getUserDetails().then(users => {
            this.users = users ;
            this.user = users[0] ;
            this.bpChart = {
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
                    plotarea:{
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
                    scaleX:{
                            values: ["Systolic", "Diastolic"]
                    },
                    scaleY: {
                        "values": "0:200:20",
                    },
                    series: [{
                        values : [this.user.bloodPressure.systolic, this.user.bloodPressure.diastolic],
                    }]
                },
                height: '45%',
                width: '95%',
            }

            this.bmiChart = {
                id: 'BmiChart',
                data : {
                            type: "hbar", 
                            backgroundColor : "#2A2B3A",
                            height: '26.5%',
                            tooltip:{visible:false},
                            scaleX : {
                                lineColor : "transparent",
                                tick : {
                                    visible : false
                                },
                                labels : [ "BMI"],
                                item : {
                                    fontColor : "#e8e8e8",
                                    fontSize : 16
                                }
                            },
                            scaleY :{
                                visible : false,
                                lineColor : "transparent",
                                guide : {
                                    visible : false
                            },
                            tick : {
                                visible : false
                                }
                            },
                            plotarea : {
                                margin: '5% 5% 5% 10%'
                            },
                            plot : {
                                stacked : true,
                                barsSpaceLeft : "20px",
                                barsSpaceRight : "20px",
                                valueBox : {
                                    visible : true,
                                    text : "%v",
                                    fontColor : "#2A2B3A"
                                },
                                tooltip : {
                                    borderWidth : 0,
                                    borderRadius : 2
                                },
                                animation:{
                                    effect:3,
                                    sequence:3,
                                    method:3
                                }
 	                    },
                        series : [
                            {
                                values : [this.user.BMI],
                                borderRadius : "50px 0px 0px 50px",
                                backgroundColor : "#E71D36",
                            },
                            {
                            "max-trackers": 0,
                            "values": [
                                (100 - this.user.BMI)
                            ],
                            "background-color": "#cdcdcd",
                            "border" : '1px',
                            borderRadius : "0px 50px 50px 0px",
                            "borderColor": '#cdcdcd',
                            "z-index": 1
                            }
                        ]
                    },
                    height: '10%',
                    width: '100%'
                }

            })
    }
    
}
