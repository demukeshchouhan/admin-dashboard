// import $ from "jquery";
// var chart = require("./modules/chart.js");


$(function(){

	var data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
		datasets: [{
		  label: "Dataset #1",
		  backgroundColor: "rgb(255, 152, 34, 0.3)",
		  borderColor: "rgb(255, 152, 34, 0.9)",
		  borderWidth: 2,
		  hoverBackgroundColor: "rgba(255,99,132,0.4)",
		  hoverBorderColor: "rgba(255,99,132,1)",
		  data: [65, 59, 20, 81, 56, 55, 40],
		}]
	  };
	
	var options = {
		maintainAspectRatio: false,
		scales: {
		  yAxes: [{
			stacked: true,
			gridLines: {
			  display: true,
			  color: "rgba(255,99,132,0.2)"
			}
		  }],
		  xAxes: [{
			gridLines: {
			  display: false
			}
		  }]
		}
	  };
	
	  var canvas = $("canvas");
	Chart.Line(canvas, {
		options: options,
		data: data
	  });

});