import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'matches.html'
})
export class MatchesPage {


  public swipe: number = 0;

  constructor(public navCtrl: NavController) {

  }

  swipeEvent(e) {
    this.swipe++

  }

}
