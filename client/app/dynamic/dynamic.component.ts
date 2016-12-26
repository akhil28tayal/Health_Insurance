import { Component, OnInit } from '@angular/core';
declare var CanvasJS: any;

@Component({
    moduleId: module.id,
    selector: 'canvas-graph',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.css'] 
})
export class DynamicComponent implements OnInit {
    ngOnInit(): any {
        this.heartChart();
        this.tempChart();
    }
    heartChart(){
            var dataPoints1 = [];

            var chart = new CanvasJS.Chart("heartChartContainer",{
                zoomEnabled: true,
                backgroundColor : '#363b42',
                title: {
                    text: "Heart Rate",
                    fontColor: '#ffffff'		
                },
                toolTip: {
                    shared: true
                    
                },
                axisY: {
                    minimum : 50,
                    maximum : 100,
                    interval : 10
                },
                data: [{ 
                    // dataSeries1
                    type: "spline",
                    xValueType: "dateTime",
                    dataPoints: dataPoints1
                }],
            legend:{
                cursor:"pointer",
                itemclick : function(e) {
                if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                }
                else {
                    e.dataSeries.visible = true;
                }
                chart.render();
                }
            }
            });



            var updateInterval = 3000;
            // initial value
            var yValue1 = 64; 
            var time = new Date;

            var updateChart = function (count) {
                count = count || 1;

                // count is number of times loop runs to generate random dataPoints. 

                for (var i = 0; i < count; i++) {
                    
                    // add interval duration to time				
                    time.setTime(time.getTime()+ updateInterval);


                    // generating random values
                    var deltaY1 = .5 + Math.random() *(-.5-.5);

                    // adding random value and rounding it to two digits. 
                    yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
                    
                    // pushing the new values
                    dataPoints1.push({
                        x: time.getTime(),
                        y: yValue1
                    });

                };
                chart.render();

            };

            // generates first set of dataPoints 
            updateChart(10);	
            
            // update chart after specified interval 
            setInterval(function(){updateChart(1)}, updateInterval);
        
    }

    tempChart(){
            var dataPoints1 = [];

            var chart = new CanvasJS.Chart("tempChartContainer",{
                zoomEnabled: true,
                backgroundColor : '#363b42',
                title: {
                    text: "Temperature",
                    fontColor: '#ffffff'		
                },
                toolTip: {
                    shared: true
                    
                },
                axisX: {
                    labelFormatter: function (e) {
                        return CanvasJS.formatDate( e.value, "hh:mm:ss TT");
                    },
                    interval: 2
                },
                axisY: {
                    minimum : 90,
                    maximum : 110,
                    interval : 5
                },
                data: [{ 
                    // dataSeries1
                    type: "spline",
                    xValueType: "dateTime",
                    dataPoints: dataPoints1
                }],
            });



            var updateInterval = 3000;
            // initial value
            var yValue1 = 98; 
            var time = new Date;

            var updateChart = function (count) {
                count = count || 1;

                // count is number of times loop runs to generate random dataPoints. 

                for (var i = 0; i < count; i++) {
                    
                    // add interval duration to time				
                    time.setTime(time.getTime()+ updateInterval);


                    // generating random values
                    var deltaY1 = .5 + Math.random() *(-.5-.5);

                    // adding random value and rounding it to two digits. 
                    yValue1 = Math.round((yValue1 + deltaY1)*100)/100;
                    
                    // pushing the new values
                    dataPoints1.push({
                        x: time.getTime(),
                        y: yValue1
                    });

                };
                chart.render();

            };

            // generates first set of dataPoints 
            updateChart(10);	
            
            // update chart after specified interval 
            setInterval(function(){updateChart(1)}, updateInterval);
        
    }
}