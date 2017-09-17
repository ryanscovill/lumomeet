import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagesPage } from '../../pages/messaging/messaging';

@Component({
  selector: 'page-contact',
  templateUrl: 'matches.html'
})
export class MatchesPage {

  constructor(public navCtrl: NavController) {

  }

  swipeEvent(e) {
    this.navCtrl.parent.select(2);
  }

}
