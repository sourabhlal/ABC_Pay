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
import {LoaderRemaining} from './loader.component';
import { Message } from './message.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LocalNotifications} from "@ionic-native/local-notifications";

import {ModalContentPage} from "../pages/about/model_content_page.component";
import {ModalContentPage0} from "../pages/targets/lessons0_modal_content_page.component";
import {ModalContentPage1} from "../pages/targets/lessons1_modal_content_page.component";
import {ModalContentPage2} from "../pages/targets/lessons_modal_content_page.component";
import {ModalContentPage3} from "../pages/targets/lessons3_modal_content_page.component";

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
    ModalContentPage0,
    ModalContentPage1,
    ModalContentPage2,
    ModalContentPage3,
    Allowance,
    Spent,
    AccountBalance,
    LoaderRemaining,
    Message
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
    ModalContentPage0,
    ModalContentPage1,
    ModalContentPage2,
    ModalContentPage3,
    Allowance,
    Spent,
    AccountBalance,
    LoaderRemaining,
    Message
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
