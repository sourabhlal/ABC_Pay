import {Component} from "@angular/core";
import {NavParams, Platform, ViewController} from "ionic-angular";
/**
 * Created by landtanin on 4/1/2017 AD.
 */
@Component({
    template: `
        <ion-header>

            <ion-toolbar>

                <ion-title>
                    FAQs
                </ion-title>

                <ion-buttons start>
                    <button ion-button (click)="dismiss()">
                        <span ion-text color="primary" showWhen="ios">Cancel</span>
                        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
                    </button>
                </ion-buttons>

            </ion-toolbar>

        </ion-header>

        <ion-content padding>
            <ion-card>
            <ion-card-header>
            <h1> Saving </h1>
            </ion-card-header>
            <ion-card-content>
            Saving isn't boring! Saving is cool! Saving means not spending your money straight away, but putting it away so you can spend it later. Usually people put their savings in a bank account, to keep the money safe until they have enough to buy what they want. If you save money now, you will be able to buy awesome things one day!
            </ion-card-content>
            </ion-card>
            
            <ion-card>
            <ion-card-header>
            <h1> Where saving will help you </h1>
            </ion-card-header>
            <ion-card-content>
            There are 2 major reasons to save:
            <ul>
            <li>For a rainy day: It is important to keep some money in reserve for the rainy day. Imagine you are at your local mall, but your parents get stuck in traffic and cannot pick you up. If you had some money saved you could have used it to take the bus home.</li>
            <li>For the future: You really want the latest gaming console the Nintendo Switch, right? But its so expensive. you can't buy it on your daily allowance of GBP10! But if you only use GBP8, and save the remaining 2 pounds, you can buy the Switch in a few months! So cool right!</li>
            </ul>
            </ion-card-content>
            </ion-card>

        </ion-content>
    `
})
export class ModalContentPage1 {
    character;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                image: 'assets/img/avatar-gollum.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'River Folk' },
                    { title: 'Alter Ego', note: 'Smeagol' }
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone!',
                image: 'assets/img/avatar-frodo.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Weapon', note: 'Sting' }
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters.',
                image: 'assets/img/avatar-samwise.jpg',
                items: [
                    { title: 'Race', note: 'Hobbit' },
                    { title: 'Culture', note: 'Shire Folk' },
                    { title: 'Nickname', note: 'Sam' }
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
