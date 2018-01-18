import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
	selector: 'app-charts',
	templateUrl: './charts.component.html',
	styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

	constructor() { 
		$('html,body').scrollTop(0);
	}

	ngOnInit() {
	}

  // Line Charts

  public lineChartData:Array<any> = [
  {data: [this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber()], label: 'Series A'},
  {data: [this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber()], label: 'Series B'}];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartColors:Array<any> = [
  { 
  	backgroundColor: 'rgba(148,159,177,0.2)',
  	borderColor: 'rgba(148,159,177,1)',
  	pointBackgroundColor: 'rgba(148,159,177,1)',
  	pointBorderColor: '#fff',
  	pointHoverBackgroundColor: '#fff',
  	pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  { 
  	backgroundColor: 'rgba(77,83,96,0.2)',
  	borderColor: 'rgba(77,83,96,1)',
  	pointBackgroundColor: 'rgba(77,83,96,1)',
  	pointBorderColor: '#fff',
  	pointHoverBackgroundColor: '#fff',
  	pointHoverBorderColor: 'rgba(77,83,96,1)'
  }];
  public lineChartType:string = 'line';

  // Bar Chart

  public barChartData:Array<any> = [
  {data: [this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber()], label: 'Series A'},
  {data: [this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber()], label: 'Series B'}];
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

  //Pie/Donout Chart

  public pieChartLabels:string[] = ['Facebook', 'Twitter', 'Instagram'];
  public pieChartData:number[] = [4500, 1000, 3254];
  public pieChartType:string = 'pie';

  // Radar Chart

  public radarChartData:Array<any> = [
  {data: [this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber()], label: 'Series A'},
  {data: [this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber()], label: 'Series B'}];
  public radarChartLabels:string[] = ['Asia', 'Europe', 'S.America', 'N.America', 'Australia', 'Antartica', '2012'];


	  // random number generator

	  generateNumber(){
	  	return Math.floor(Math.random() * (95 - 27) + 28);
	  }

	  //Toggle values of the chart
	  toggleValue(chart){
	  	let chartType1 = [
	  	{data: [this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber()], label: 'Series A'},
	  	{data: [this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber(),this.generateNumber()], label: 'Series B'}];

	  	let chartType2 = [this.generateNumber(),this.generateNumber(),this.generateNumber()]

	  	switch(chart) {
	  		case 'line': 
	  		this.lineChartData = chartType1
	  		break;
	  		case 'bar':
	  		this.barChartData = chartType1
	  		break;
	  		case 'radar':
	  		this.radarChartData = chartType1
	  		break;
	  		case 'pie':
	  		this.pieChartData = chartType2
	  		break;
	  	}

	  }

	  switchChart(chartType){
	  	if(chartType == 'pie')
	  		this.pieChartType = 'doughnut';
	  	else
	  		this.pieChartType = 'pie';
	  }


	}
