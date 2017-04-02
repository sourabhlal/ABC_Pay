import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ModalContentPage0} from "./lessons0_modal_content_page.component";
import {ModalContentPage1} from "./lessons1_modal_content_page.component";
import {ModalContentPage2} from "./lessons_modal_content_page.component";
import {ModalContentPage3} from "./lessons3_modal_content_page.component";

@Component({
  selector: 'page-targets',
  templateUrl: 'targets.html'
})
export class TargetsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openModalOverdraft(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage0, characterNum);
    modal.present();
  }

  openModalSavings(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage1, characterNum);
    modal.present();
  }

  openModalBudget(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage2, characterNum);
    modal.present();
  }

  openModal3(characterNum) {

    let modal = this.modalCtrl.create(ModalContentPage3, characterNum);
    modal.present();

  }

}
