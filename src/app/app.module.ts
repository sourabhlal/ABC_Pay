import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TargetsPage } from '../pages/targets/targets';

import { Balance } from './balance.component';
import { AccountBalance } from './account-balance.component';
import { Transaction } from './transaction.component';
import { Allowance } from './allowance.component';
import { Spent } from './spent.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LocalNotifications} from "@ionic-native/local-notifications";

import {ModalContentPage} from "../pages/about/model_content_page.component";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TargetsPage,
    Balance,
    Transaction,
    ModalContentPage,
    Allowance,
    Spent,
    AccountBalance
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    TargetsPage,
    Balance,
    Transaction,
    ModalContentPage,
    Allowance,
    Spent,
    AccountBalance
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
