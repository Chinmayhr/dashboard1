import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var google;
declare var $: any;


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

export class MapsComponent implements OnInit {

  map:any;
  marker:any;
  countries:any = [];

  constructor(private http: HttpClient) { 
    $('html,body').scrollTop(0);
  }

  ngOnInit() {
  	this.initMap()
  }

  initMap() {
    var uluru = {lat: 20.5937, lng: 78.9629};
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: uluru,
      disableDefaultUI: true,
      streetViewControl: true,
      fullscreenControl: true
    });

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) =>{
        console.log(position)
        this.map.setCenter({lat: position.coords.latitude, lng: position.coords.longitude})
        this.map.setZoom(14)
        this.marker = new google.maps.Marker({
          position: {lat: position.coords.latitude, lng: position.coords.longitude},
          map: this.map,
          title: 'Hello World!'
        });
        var infowindow = new google.maps.InfoWindow({
          content: 'You are here'
        });
        infowindow.open(this.map,this.marker);
      },
      (error)=>{
        console.log(error)
      })
    }
  }

  findCountry(countryName){
    console.log(countryName)
    if(countryName){
      this.http.get(`https://restcountries.eu/rest/v2/name/ ${countryName}`).subscribe((data) =>{
        if(data){
          this.countries = data
          console.log(this.countries)
        }
      },
      (error) =>{
        console.log("Error Occured")
        this.countries = []
      })
    }
    else{
      this.countries = []
    }

  }

  displayOnMap(country){
    this.marker.setMap(null);
    this.map.setCenter({lat:country.latlng[0],lng:country.latlng[1]})
    if(country.area > 2500000){
      this.map.setZoom(3)
    }
    else if(country.area <= 2500000 && country.area > 2000000){
      this.map.setZoom(4)
    }
    else if(country.area <= 2000000 && country.area > 310000){
      this.map.setZoom(5)
    }
    else if(country.area <= 310000 && country.area > 100000){
      this.map.setZoom(6)
    }
    else if(country.area <= 100000 && country.area > 20000){
      this.map.setZoom(7)
    }
    else if(country.area <= 20000 && country.area > 10000){
      this.map.setZoom(8)
    }
    else if(country.area <= 10000 && country.area > 1000){
      this.map.setZoom(9)
    }
    else if(country.area <= 1000 && country.area > 500){
      this.map.setZoom(10)
    }
    else{
      this.map.setZoom(11)
    }
  }
}
