import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { CommonModule, DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component'; 
import { HomeComponent } from './home/home.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
@NgModule({
  declarations: [AppComponent, ProfilComponent, InscriptionComponent, LoginComponent, HomeComponent, ReclamationComponent],
  entryComponents: [],
  imports: [  
    CommonModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule 
  ],
  providers: [
    StatusBar,  
    DatePipe, 
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
