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
            <h1> Budget </h1>
            </ion-card-header>
            <ion-card-content>
            A BUDGET is a plan on how you will spend the money you earn. It includes how much money you earn (and from where you earn it) and details what you want to spend your money on and how much you will save.
            <br>
            This allows them to start to learn to budget early. Gradually, you can encourage them to realise that it’s not the money itself that’s valuable, but the fact that you can choose what to get/do with it.
            </ion-card-content>
            </ion-card>
            <ion-card>
                <ion-card-header>
                <h1>Learn how to budget!</h1>
                </ion-card-header>
                <ion-card-content>
                A budget, or spending plan, will help you cover all your needs, wants, expenses, and saving goals. It requires three things: 
                <ol>
                <li>Knowing how much money you spend</li>
                <li>Knowing your saving goals</li>
                <li>Managing your money</li>
                </ol>
                Let's start by creating a weekly budget.
                <ol>
                <li>Write the month, week, and year at the top. For example, April 1-7, 2017.</li>
                <li>Think about your sources of income. Where do they come from? Allowance? Earnings? Gifts? A combination of all three? Under "INCOME," list your income sources on the left side of the page.</li>
                <li>Under "AMOUNT," write the amount of your income source. For example, if your allowance is $5.00 a week, write $5.00. If you make $2.00 for babysitting and $3.00 for yardwork this week, write down $5.00 for earnings. If you receive any money as a gift, write down the amount you got.</li>
                <li>Add your income amounts together and enter the amount where it says "INCOME TOTAL."</li>
                <li>Now, think about your fixed expenses. Do you have to pay for lunch, bus fare, or any other regular expense? Fixed expenses can also be thought of as needs. Are there any items you need to buy regularly, such as lip gloss or shampoo? Also, "FIXED EXPENSES" is the section where you should keep track of your savings. If you consider your savings to be a regular fixed expense, you're more likely to stick to your saving plan.</li>
                <li>Again, on the left side, list your fixed expenses, and on the right side your fixed expense amounts. Add your fixed expense amounts together and enter them next to "FIXED EXPENSES TOTAL."</li>
                <li>Subtract your fixed expenses total from your income total and write it in the blank next to "INCOME TOTAL - FIXED EXPENSES TOTAL." This is the amount you'll have left for other expenses.</li>
                <li>In the section titled "OTHER EXPENSES," you'll list all the things you want to spend money on, like entertainment, snacks, and clothes. This is also where you'll list unexpected expenses.
                <li>Add the "OTHER EXPENSES" amounts together and enter your total.</li>
                </ol>
                </ion-card-content>
            </ion-card>
        </ion-content>
    `
})
export class ModalContentPage2 {
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
