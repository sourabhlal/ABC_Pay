import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ModalContentPage2} from "./lessons_modal_content_page.component";
import {ModalContentPage3} from "./lessons3_modal_content_page.component";

@Component({
  selector: 'page-targets',
  templateUrl: 'targets.html'
})
export class TargetsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage2, characterNum);
    modal.present();
  }

  openModal3(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage3, characterNum);
    modal.present();

  }

}
