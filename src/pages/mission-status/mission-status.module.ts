import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MissionStatusPage } from './mission-status';

@NgModule({
  declarations: [
    MissionStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(MissionStatusPage),
  ],
})
export class MissionStatusPageModule {}
