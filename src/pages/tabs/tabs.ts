import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { MatchesPage } from '../matches/matches';
import { MessagesPage } from '../messaging/messaging';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ProfilePage;
  tab4Root = MatchesPage;
  tab5Root = MessagesPage;


  constructor() {

  }
}
