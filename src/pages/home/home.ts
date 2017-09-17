import { Component, ViewChild, ElementRef } from '@angular/core';

import { NavController } from 'ionic-angular';
import { MapPage } from '../../pages/map/map';

declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public showQuestion: boolean;
  public showMap: boolean;

  constructor(public navCtrl: NavController) {
    this.showQuestion = true;
    this.showMap = false;
  }


   public clickOption(option: number): void {
      this.navCtrl.push(MapPage, {});
   }

}
