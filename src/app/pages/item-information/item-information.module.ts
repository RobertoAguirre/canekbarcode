import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemInformationPageRoutingModule } from './item-information-routing.module';

import { ItemInformationPage } from './item-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemInformationPageRoutingModule
  ],
  declarations: [ItemInformationPage]
})
export class ItemInformationPageModule {}

