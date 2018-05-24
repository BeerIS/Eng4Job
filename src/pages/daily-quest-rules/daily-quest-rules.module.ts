import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyQuestRulesPage } from './daily-quest-rules';

@NgModule({
  declarations: [
    DailyQuestRulesPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyQuestRulesPage),
  ],
})
export class DailyQuestRulesPageModule {}
