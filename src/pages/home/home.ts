import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { TvPage } from '../tv/tv';
import { SmartPhonePage } from '../smart-phone/smart-phone';
import { LamparaPage } from '../lampara/lampara';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  b = BocinaPage;
  t = TvPage;
  s = SmartPhonePage;
  l = LamparaPage;

  constructor(public navCtrl: NavController) {

  }

  ClickBocina()
  {
    this.navCtrl.push(this.b);
  }

  ClickTV()
  {
    this.navCtrl.push(this.t);
  }

  ClickSmart()
  {
    this.navCtrl.push(this.s);
  }

  ClickLamp()
  {
    this.navCtrl.push(this.l);
  }

}
