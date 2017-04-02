import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TargetsPage } from '../pages/targets/targets';

import { Balance } from './balance.component';
import { Transaction } from './transaction.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ModalContentPage} from "../pages/about/model_content_page.component";
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
      ModalContentPage2,
      ModalContentPage3
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
      ModalContentPage2,
    ModalContentPage3
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
