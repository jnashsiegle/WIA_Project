/**
 * Created by janasiegle on 7/23/2015.
 */

var pieData = [
                {
                    value: 46,
                    color:"#9e6037",
                    label: "Prostitution"
                },
                {
                    value : 27,
                    color : "#c4c87b",
                    label : "Domestic Servitude"
                },
                {
                    value : 10,
                    color : "#cabdaa",
                    label : "Agriculture"
                },
                {
                    value : 5,
                    color : "#ebc280",
                    label : "Factories"
                },
                {
                    value : 12,
                    color : "#657036",
                    label : "Misc"
                }
            ];
            // pie chart options
            var pieOptions = {
                 segmentShowStroke : true,
                 segmentStrokeColor : "#000000",
                 segmentStrokeWidth : 1,
                 animateRotate: true,                 
                 
                 tooltipTemplate : "<%= label %>: <%= value %>% ",
                 animation : true,
                 animationSteps : 60,
                 animationEasing : "easeInOutElastic,"
            }
            // get pie chart canvas
            var trafficking= document.getElementById("trafficking").getContext("2d");
            // draw pie chart
            new Chart(trafficking).Pie(pieData, pieOptions); 


