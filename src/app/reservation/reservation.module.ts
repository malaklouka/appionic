import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservationPageRoutingModule } from './reservation-routing.module';

import { ReservationPage } from './reservation.page';
import { EnvoyeeComponent } from './envoyee/envoyee.component';
import { RecusComponent } from './recus/recus.component'; 
import { IonicRatingModule } from 'ionic4-rating';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservationPageRoutingModule,
    IonicRatingModule
  ],
  declarations: [ReservationPage, EnvoyeeComponent, RecusComponent, DetailsComponent]
})
export class ReservationPageModule {}
