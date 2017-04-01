import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {LocalNotifications} from "@ionic-native/local-notifications";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private localNotifications: LocalNotifications) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      setTimeout(function(){
        splashScreen.hide();

        localNotifications.schedule({
          text: 'Delayed ILocalNotification',
          at: new Date(new Date().getTime() + 3600),
          led: 'FF0000',
          sound: null
        });

      },3000)
    });
  }
}
