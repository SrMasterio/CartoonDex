import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivPageRoutingModule } from './privacidad-routing.module';

import { PrivacidadPage } from './privacidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivPageRoutingModule
  ],
  declarations: [PrivacidadPage]
})
export class PrivPageModule {}
