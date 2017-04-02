import {Component} from "@angular/core";
import {NavParams, Platform, ViewController} from "ionic-angular";
import {Http, URLSearchParams} from '@angular/http';
/**
 * Created by landtanin on 4/1/2017 AD.
 */
@Component({
    template: `
        <ion-header>
            
            <ion-toolbar>
                
                <ion-title>
                    Set Little Swift's Allowance
                </ion-title>
                
                <ion-buttons start>
                    <button ion-button (click)="dismiss()">
                        <span ion-text color="primary" showWhen="ios">Cancel</span>
                        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
                    </button>
                </ion-buttons>

                
            </ion-toolbar>
            
        </ion-header>
        
        <ion-content>
<<<<<<< HEAD
            
            <ion-item>
                <ion-label floating>New allowance amount</ion-label>
                <ion-input type="text"></ion-input>
            </ion-item>
            
=======
       

            <ion-list>

            <form (ngSubmit)="submit()">
                <ion-item>
                    <ion-label floating>Daily Allowance</ion-label>
                    <ion-input type="text" [(ngModel)]="balance" name="balance"></ion-input>
                </ion-item>
                
                <div padding>
                    <button ion-button type="submit" block>Submit</button>
                </div>
            </form>
                
              </ion-list>

>>>>>>> d379b44d4b04aef931df5f5139b056ad0f02b36e
            
        </ion-content>
    `
})
export class ModalContentPage {
    character;

    public balance: string;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        private http:Http
    ) {
        this.http = http;
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
 
   submit() {
        var link = `https://mlhprime.pandelis.me/api/v1/set?balance=${this.balance}`;
        let body = new URLSearchParams()
        this.http.post(link, body)
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(data => {
        this.dismiss();
        }, error => {
            console.log("Oooops!");
        });
  }
}