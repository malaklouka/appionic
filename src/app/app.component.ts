import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0; 
  public appPages = [    
    {
      title: 'Mon Profil',
      url: '/profil',
      icon: 'person'
    },
    {
      title: 'Recherche',
      url: '/annonce/search',
      icon: 'search'
    },
    {
      title: 'Mes Annonces',
      url: '/annonce',
      icon: 'apps'
    },
    {
      title: 'Mes Demandes',
      url: '/reservation/envoyee',
      icon: 'megaphone'
    }, 
    {
      title: 'Réservations',
      url: '/reservation/recus',
      icon: 'receipt'
    },
    {
      title: 'Message',
      url: '/message',
      icon: 'mail-unread'
    },
    {
      title: 'Réclamation',
      url: '/reclamation',
      icon: 'alert-circle'
    } ,
    {
      title: 'Quitter',
      url: '/login',
      icon: 'exit'
    }  
  ];
   

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
