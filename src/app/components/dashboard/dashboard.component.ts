import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { 
    $('html,body').scrollTop(0);
  }

  ngOnInit() {
  }

  public pieChartLabels:string[] = ['Chrome', 'Opera', 'Firefox', 'Safari', 'Internet Explorer'];
  public pieChartData:number[] = [4500, 1000, 2200, 3254, 2500];
  public pieChartType:string = 'pie';

  public lineChartData:Array<any> = [
  {data: [120,140,75,68,100,105,130], label: 'Company A'},
  {data: [100,90,120,125,140,120,150], label: 'Company B'}];
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

  messages:any=[
    { 
      from:"Tom",
      to:"Jerry",
      message:"Hey Jerry, I am coming to get you!",
      image:"/assets/images/tom.jpg"
    },
    { 
      from:"Jerry",
      to:"Tom",
      message:"Best of Luck...",
      image:"/assets/images/jerry.jpg"
    }
  ]
  chatWindowCollapsed:boolean=false;
}
