import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessagesPage } from '../../pages/messaging/messaging';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'matches.html'
})
export class MatchesPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  swipeEvent(e) {
    this.presentConfirm();
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Do you want to engage?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.parent.select(2);
          }
        }
      ]
    });
    alert.present();
  }
}
