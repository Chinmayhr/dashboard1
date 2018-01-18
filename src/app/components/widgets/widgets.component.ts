import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
	
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
  constructor() {
  	$('html,body').scrollTop(0);
   }

  ngOnInit() {
  }


}
