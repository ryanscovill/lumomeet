import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'messaging.html'
})
export class MessagesPage {

  private _messages: Array<any>;

  constructor(public navCtrl: NavController) {
     this._messages = JSON.parse('[{"name":"jack", "message":"Hey, Im Jack, want to hit up a starbucks sometime?"},{"name":"john", "message":"Message"},{"name":"joe", "message":"Message"}]');
  }

  public getMessages(): Array<any> {
    return this._messages;
  }

  public addMessage(name: string, message: string): void {
    this._messages.push({name: name, message: message});
  }

}
