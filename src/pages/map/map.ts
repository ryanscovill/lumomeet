import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  ionViewDidEnter(){
     this.presentAlert();
     google.maps.event.trigger(this.map, 'resize');
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

    position = new google.maps.LatLng(49.280933,-122.911143);
    marker = new google.maps.Marker({position: position, title: ""});
    marker.setMap(this.map);

     position = new google.maps.LatLng(49.280214,-122.911344);
        marker = new google.maps.Marker({position: position, title: ""});
        marker.setMap(this.map);

    google.maps.event.trigger(this.map, 'resize');


  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Matches Nearby',
      subTitle: 'There are 2 people feeling the same as you.',
      buttons: ['Ok']
    });
    alert.present();
  }


}
