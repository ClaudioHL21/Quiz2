import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SmartPhonePage } from './smart-phone';

@NgModule({
  declarations: [
    SmartPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(SmartPhonePage),
  ],
})
export class SmartPhonePageModule {}
