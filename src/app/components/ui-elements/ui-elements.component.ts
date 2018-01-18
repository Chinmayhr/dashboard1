import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-ui-elements',
  templateUrl: './ui-elements.component.html',
  styleUrls: ['./ui-elements.component.css']
})
export class UiElementsComponent implements OnInit {

  constructor() {
  	$('html,body').scrollTop(0);
   }

  ngOnInit() {
  }

}
