// import $ from "jquery";
// var chart = require("./modules/chart.js");


$(function(){

	var monthly_report_data = {
		labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
		datasets: [{
		  label: "Monthly",
		  backgroundColor: "rgb(255, 152, 34, 0.3)",
		  borderColor: "rgb(255, 152, 34, 0.9)",
		  borderWidth: 2,
		  hoverBackgroundColor: "rgba(255,99,132,0.4)",
		  hoverBorderColor: "rgba(255,99,132,1)",
			data: [65, 59, 20, 81, 56, 55, 40,20,15,5,8],
		}]
	  };
	
	var monthly_report_options = {
		responsive: true,
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
		
		var visitor_report_data = {
			labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
			datasets: [{
				label: "Visitors",
				borderColor: "rgb(255, 152, 34, 0.9)",
				borderWidth: 2,
				hoverBackgroundColor: "rgba(255,99,132,0.4)",
				hoverBorderColor: "rgba(255,99,132,1)",
				data: [ 8, 5, 15, 20, 40, 55, 56, 81, 20, 59, 65],
				fill: false,
			}]
			};
		
		var visitor_report_options = {
			responsive: true,
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
				},
				fill : false
				}]
			}
			};
	
	var monthly_report = $("#monthly_report");
	var visitor_report = $("#visitor_report");
	Chart.Line(monthly_report, {
			options: monthly_report_options,
			data: monthly_report_data
			});
	Chart.Line(visitor_report, {
		options: visitor_report_options,
		data: visitor_report_data
		});
	
		$(".search_bar").on("click", function(){
			$(".search_bar_manu").toggle();
		});

});