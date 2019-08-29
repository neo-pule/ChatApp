import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  // pages = [
  //   {
  //     title: 'Home',
  //     url: '/home',
  //     icon: 'log-in'
  //   },
  //   {
  //     title: 'about',
  //     url: '/about',
  //     icon: 'person'
  //   }
  // ]; 


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    // this.router.events.subscribe((event: RouterEvent) => {
    //   if (event instanceof NavigationEnd) {
    //     this.pages.map( p => {
    //       return p['active'] = (event.url === p.url);
    //     });
    //   }
    // });
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
