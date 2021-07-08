import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { DetailsComponent } from './details/details.component';
import { EnvoyeeComponent } from './envoyee/envoyee.component';
import { RecusComponent } from './recus/recus.component';

import { ReservationPage } from './reservation.page';

const routes: Routes = [
  {
    path: 'envoyee',
    component: EnvoyeeComponent
  },
  {
    path: 'recus',
    component: RecusComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservationPageRoutingModule {}
