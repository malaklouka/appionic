import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnoncePageRoutingModule } from './annonce-routing.module';

import { AnnoncePage } from './annonce.page';
import { AjoutComponent } from './ajout/ajout.component';
import { SerachComponent } from './serach/serach.component';
import { DetailsComponent } from './details/details.component';
import { UpdateComponent } from './update/update.component';
import { ListAnnonceComponent } from './list-annonce/list-annonce.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AnnoncePageRoutingModule
  ],
  declarations: [AnnoncePage, AjoutComponent, SerachComponent, DetailsComponent, UpdateComponent, ListAnnonceComponent]
})
export class AnnoncePageModule {}
