import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase/app';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule}  from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestore} from '@angular/fire/firestore';
import { MenuComponent } from './page/menu/menu.component';
import { AngularFireAuth } from '@angular/fire/auth';





const firebaseConfig = {
  apiKey: "AIzaSyBHSOM4RaqyWCag8QSlwouF01XXcv9G4bY",
  authDomain: "chatapp-d5db9.firebaseapp.com",
  databaseURL: "https://chatapp-d5db9.firebaseio.com",
  projectId: "chatapp-d5db9",
  storageBucket: "chatapp-d5db9.appspot.com",
  messagingSenderId: "170587772022",
  appId: "1:170587772022:web:f632f89de877c447"
};

@NgModule({
  declarations: [MenuComponent,AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),AppRoutingModule,AngularFireModule.initializeApp(firebaseConfig),AngularFirestoreModule],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
