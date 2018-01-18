import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	ngOnInit(){
		this.checkDevice();
	}

	expand: boolean = true;
	sidebarClass:string = "sidebarExpand";
	displayOptions = "";
	mainContentMargin = "250px";
	pageName:String = "Dashboard"

	checkDevice(){
		if(window.innerWidth < 900){
			this.mobileDeviceConfigurations();
		}
		else{
			this.desktopDeviceConfigurations();
		}
	}

	mobileDeviceConfigurations(){
		this.expand = false;
		this.sidebarClass = "sidebarCollapse";
		this.mainContentMargin = "60px";
		this.displayOptions = "none"
	}

	desktopDeviceConfigurations(){
		this.expand = true;
		this.sidebarClass = "sidebarExpand";
		if(window.innerWidth < 900){
			this.mainContentMargin = "60px";
		}
		else{
			this.mainContentMargin = "250px";
		}
		setTimeout(()=>{
			this.displayOptions = "inline"
		},300)
	}

	toogleSidebar(){
		this.expand = !this.expand;
		if(this.expand){
			this.desktopDeviceConfigurations();
		}
		else{
			this.mobileDeviceConfigurations()
		}
	}

	windowresize(e){
		setTimeout(()=>{
			this.checkDevice();
		},300)
	}

	toogleMobileSidebar(){
		this.checkDevice();
	}
}
