import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DailyQuestRulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-quest-rules',
  templateUrl: 'daily-quest-rules.html',
})
export class DailyQuestRulesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyQuestRulesPage');
  }

  startQuest()
  {
    this.navCtrl.push("DailyQuestMissionPage");
  }

}
