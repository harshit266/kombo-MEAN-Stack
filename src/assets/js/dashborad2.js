/*
 Template Name: Inspire - Bootstrap 4 Admin Dashboard
 Author: UIdeck
 Website: www.uideck.com
File: dashborad2 js
 */

!function($) {
    "use strict";

    var MorrisCharts = function() {};

    //creates line chart
    MorrisCharts.prototype.createLineChart = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Line({
          element: element,
          data: data,
          xkey: xkey,
          ykeys: ykeys,
          labels: labels,
          hideHover: 'auto',
          gridLineColor: '#eef0f2',
          resize: true, //defaulted to true
          lineColors: lineColors
        });
    },
    //creates Bar chart
    MorrisCharts.prototype.createBarChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            labels: labels,
            gridLineColor: '#eef0f2',
            barSizeRatio: 0.4,
            resize: true,
            hideHover: 'auto',
            barColors: lineColors
        });
    },
    //creates Stacked chart
    MorrisCharts.prototype.createStackedChart  = function(element, data, xkey, ykeys, labels, lineColors) {
        Morris.Bar({
            element: element,
            data: data,
            xkey: xkey,
            ykeys: ykeys,
            stacked: true,
            labels: labels,
            hideHover: 'auto',
            resize: true, //defaulted to true
            gridLineColor: '#4ac18e',
            gridTextColor: '#eee',
            barColors: lineColors
        });
    },

    MorrisCharts.prototype.init = function() {

        //create line chart for dashboard -2
        var $data  = [
            { y: '2018', a: 100, b: 90 },
            { y: '2019', a: 75, b: 65 },
            { y: '2020', a: 50, b: 40 },
            { y: '2021', a: 75, b: 65 },
            { y: '2022', a: 50, b: 40 },
            { y: '2023', a: 75, b: 65 },
            { y: '2024', a: 60, b: 50 },
            { y: '2025', a: 45, b: 35 },
            { y: '2026', a: 75, b: 65 },
            { y: '2027', a: 80, b: 70 }
          ];
        this.createLineChart('morris-line-example', $data, 'y', ['a', 'b'], ['Sales', 'Expense'], ['#e22a6f', '#24d5d8']);


        //creating bar chart for dashboard -2
        var $barData = [
            {y: '10 Sales', a: 75, b: 65},
            {y: '9 Sales', a: 50, b: 40},
            {y: '7 Sales', a: 75, b: 65},
            {y: '9 Sales', a: 100, b: 90},
            {y: '5 Sales', a: 90, b: 75},
            {y: '7 Sales', a: 75, b: 65},
            {y: '19 Sales', a: 80, b: 70}
        ];
        this.createBarChart('morris-bar-example', $barData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#e22a6f', '#24d5d8']);

        //creating Stacked chart for dashboard -2
        var $stckedData  = [
            { y: '8 Sales', a: 75,  b: 65},
            { y: '4 Sales', a: 50,  b: 40},
            { y: '3 Sales', a: 75,  b: 65},
            { y: '8 Sales', a: 100, b: 90},
            { y: '9 Sales', a: 80, b: 65},
            { y: '5 Sales', a: 70, b: 60},
            { y: '6 Sales', a: 90, b: 80}
        ];
        this.createStackedChart('morris-bar-stacked', $stckedData, 'y', ['a', 'b'], ['Series A', 'Series B'], ['#24d5d8','#e22a6f']);

    },
    //init
    $.MorrisCharts = new MorrisCharts, $.MorrisCharts.Constructor = MorrisCharts
}(window.jQuery),

//initializing 
function($) {
    "use strict";
    $.MorrisCharts.init();
}(window.jQuery);