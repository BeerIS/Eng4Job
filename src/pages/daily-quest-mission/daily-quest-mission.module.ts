import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyQuestMissionPage } from './daily-quest-mission';

@NgModule({
  declarations: [
    DailyQuestMissionPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyQuestMissionPage),
  ],
})
export class DailyQuestMissionPageModule {}
