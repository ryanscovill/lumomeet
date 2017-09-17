import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapElement: ElementRef;
  public showQuestion: boolean;
  public showMap: boolean;
  map: any;

  constructor(public navCtrl: NavController) {
    this.showQuestion = true;
    this.showMap = false;
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

    let latLng = new google.maps.LatLng(49.2786517,-122.9091899);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    var position = new google.maps.LatLng(49.2786517, -122.9091899);
    var marker = new google.maps.Marker({position: position, title: ""});
    marker.setMap(this.map);

    position = new google.maps.LatLng(49.2777558,-122.9252403);
    marker = new google.maps.Marker({position: position, title: ""});
    marker.setMap(this.map);


  }

   public clickOption(option: number): void {
      this.showQuestion = false;
      this.showMap = true;
   }

   public goBack(): void {
     this.showQuestion = true;
     this.showMap = false;
   }

}
