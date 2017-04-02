import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ModalContentPage} from "./model_content_page.component";


@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {

    public remaining: string;
    public allowance: string;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

        

    }

    openModal(characterNum) {

        let modal = this.modalCtrl.create(ModalContentPage, characterNum);
        modal.present();
    }

}

