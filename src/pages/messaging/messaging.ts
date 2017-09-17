import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'messaging.html'
})
export class MessagesPage {

  constructor(public navCtrl: NavController) {

  }

  public get messages(): object {
    return JSON.parse('[{"name":"jack", "message":"Hey, Im Jack, want to hit up a starbucks sometime?"},{"name":"john", "message":"Message"},{"name":"joe", "message":"Message"}]');
  }
}
