import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessagePage } from './message.page';
import { SendComponent } from './send/send.component';

const routes: Routes = [
  {
    path: '',
    component: MessagePage
  },  {
    path: 'send/:id',
    component: SendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessagePageRoutingModule {}
