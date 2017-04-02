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
                <ion-card-content>

            <img src="assets/img/student_shopping.jpg"/>
            
            <ion-card-header>

                1. Budget during the first weeks of term

            </ion-card-header>
            
            <div>

                With the student loan fresh in your account, you’re so far 'in the black' that you’re positively itching to spend. Beware – you have entered the danger zone. Someone organises a fancy dress party: you fork out on an expensive costume. You need a new hobby: you acquire a ukulele.
                It’s hard to budget when you’re keen to have fun, but it is worth holding off on extravagant spending early on. If you want to go out and celebrate at the end of term, check out the top five student budget apps, to make sure you have something left to spend.
                
            </div>
                    
                    <ion-card-header>

                2. Plan meals in advance

                    </ion-card-header>

            <div>

                Walking back from a lecture, you’re likely to want to pick up lunch and a coffee with friends. Pay attention to jaunts like these – if they become too much of a habit, they will significantly impact your finances.
                Preparing food at home is a great way to save money over the week, and there’s no need to cut back on the ingredients you love if you budget correctly.

            </div>

            <ion-card-header>

                3. Enjoy student discounts

            </ion-card-header>

            <div>

                Congratulations – you are now eligible for a ridiculous number of discounts. This doesn’t mean you should be increasing your spending just to enjoy them, but it does mean savings when you do go shopping.
                NUS Extra cards cost £12 for the year, and open the gates to over 150 offers and discounts. Odeon cinemas offer 25% off tickets, while retailers like ASOS and Topshop discount student purchases by 10%. Be sure to check the list of offers before registering for a card, as it’s only worth buying if you are likely to use it.

            </div>

            <ion-card-header>

                4. Travel smarter

            </ion-card-header>

            <div>

                Travelling home for a weekend or visiting friends at other universities can be a costly affair, but that doesn’t have to put you off. There's the 16-25 railcard that can get you up to a third off rail fares.
                Alternatively – your friends will only turn 21 once – so get to their birthday celebrations with a ride-sharing service like BlaBlaCar. If you have a car, you can offer seats to paying passengers, raking back a third of your petrol costs for each person you take on board.

            </div>

            <ion-card-header>

                5. Sell, sell, sell

            </ion-card-header>

            <div>

                Your textbooks are surprisingly valuable, so when you’re sure that a book’s future is to sit and gather dust, head to Amazon to trade it in for a gift card. The same applies to your clothes. Rid yourself of fashion faux-pas at eBay, or head to the ASOS marketplace if you think they’re worth a buck or two.

            </div>
            
            <ion-card-header>

                6. Head online for money saving tips

            </ion-card-header>
            
            <div>

                Once you've arrived at university, chances are you’ll spend more time online than can really be healthy – generally at 1am. As you're already connected, make the most of your browsing time by heading to studentbeans.com or studentmoneysaver.co.uk for offers, discounts and budgeting tips.
                
            </div>

            <ion-card-header>

                7. Buy non-branded

            </ion-card-header>

            <div>

                We understand that there’s something less than glamorous about supermarket value ranges. Don’t let that stop you – the quality is often indistinguishable from that of branded produce. Avoiding the household names can mean a hefty saving on filling the fridge, so you’d be wise to look beyond the labels.
                Next time an all-nighter leaves you with a headache, remember that the same principle also applies to medicines. Branded pain killers can be significantly more expensive than supermarket versions, which often sell for less than £1.


            </div>

            <ion-card-header>

                8. Avoid the kebab shop

            </ion-card-header>

            <div>

                You’re on your way home from another night of dancing and trying to converse over a deafening beat. It’s time for something greasy, and you can already smell the kebab shop on the crisp morning air …
                Stop! Adding fast food to each and every night out is going to take its toll, not only on your waistline, but also on your finances. Indulge in some cheesy chips from time to time, but if you’re serious about saving money, try returning home to a bowl of cereal or some toasted pitta

            </div>

            <ion-card-header>

                9. Get paid to do stuff

            </ion-card-header>

            <div>

                Shouldn’t that say ‘get a job’? Well, sort of – but we’re aware that not every university gives you time to put your all into studying while working in a bar along the way. If you think you can balance it, by all means apply for a job. If you can’t, try taking part in paid online surveys or market research focus groups. After all, everyone secretly loves a good survey!
                Ipsos rewards users for completing surveys online, offering vouchers from the likes of Amazon and John Lewis. If you have a little more time, a focus group like Saros will pay £30 to £100 for two hours’ work – a welcome boost to your budget.

            </div>

            <ion-card-header>

                10. ‘Pre-drinks’

            </ion-card-header>

            <div>

                We’re not advocating drinking, but you’re a student now, so we suspect you’re doing it anyway. Take our advice on this, though – you’ll save money if you drink before going out. Your local supermarket is almost always going to beat student bars on price, so buy accordingly, and start your evening at home with friends. Bonus: you’ll actually be able to hear what they’re saying.

            </div>

                </ion-card-content>
            </ion-card>
            
            

        </ion-content>
    `
})
export class ModalContentPage3 {
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
