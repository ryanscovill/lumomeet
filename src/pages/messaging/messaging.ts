import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'messaging.html'
})
export class MessagesPage {


  public swipe: number = 0;

  constructor(public navCtrl: NavController) {

  }

  swipeEvent(e) {
    this.swipe++

  }

}
