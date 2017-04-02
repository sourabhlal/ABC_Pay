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
                    Overdraft Explainer
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
            <h1> Overdraft </h1>
            </ion-card-header>
            <ion-card-content>
            An overdraft occurs when money is withdrawn from a bank account and the available balance goes below zero. In this situation the account is said to be "overdrawn".
            <br>
            I know that sounds complicated but its not! Think about it this way - imagine there is a bowl with 10 chocolates, and you own 4 of them. An overdraft would be eating 5 chocolates. You ate someone elses chocolate!! This means that you will have to get a chocolate to replace it in the future.
            <br>
            Its not good to overdraft your account! It's spending money that you do not have, and will have to repay!
            </ion-card-content>
            </ion-card>
            <ion-card>
            <ion-card-header>
            <h1> How to avoid overdrafting </h1>
            </ion-card-header>
            <ion-card-content>
            There are 2 simple techniques:
            <ol>
                <li>
                <h3>Plan your expenses by making a budget</h3>
                <p> If you plan your expenses you will not need to spend more than you have! </p>
                </li>

                <li>
                <h3>Save your money</h3>
                <p> Planning isn't enough! Sometimes you will have to spend in an emergency - this is where your savings will be handy. And if you save enough as an added bonus you can also buy some cool things that are typically too expensive. </p>
                </li>
            </ol>
            </ion-card-content>
            </ion-card>

        </ion-content>
    `
})
export class ModalContentPage0 {
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
