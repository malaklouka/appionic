import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';

import { AnnoncePage } from './annonce.page';
import { DetailsComponent } from './details/details.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';
import { SerachComponent } from './serach/serach.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: AnnoncePage
  },
  {
    path: 'add',
    component: AjoutComponent
  },
  {
    path: 'search',
    component: SerachComponent
  },
  {
    path: 'all',
    component: ListAnnonceComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'edit/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncePageRoutingModule {}
