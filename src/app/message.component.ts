import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'message',
  template: `

  <ion-card [ngClass]="[class]">
      <ion-card-content>
      <ion-icon name="alert"></ion-icon>  {{message}}
    </ion-card-content>
  </ion-card>
   `
})
export class Message {
  class: string;
  message: string;
  remaining: string;

   formatGBP(int: number){
      let str = int.toString()
      if (int < 0){
          return '-£' + str.slice(1,-2) + '.' + str.slice(-2)
      }
      return '£' + str.slice(0,-2) + '.' + str.slice(-2)
    }

  constructor(private http:Http) {

    this.class = "message-regular";
    
    let timer = Observable.timer(0,5000);
    timer.subscribe(t=> {
        http.get('https://mlhprime.pandelis.me/api/v1/remaining')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(data => this.remaining = data.percentage);
        this.class = "message-regular";
        if(parseInt(this.remaining) < 30 && parseInt(this.remaining) > 0){
          this.class = "message-concern";
          this.message = "Looks like you're getting low on todays spening money Swift. Make sure not to overspend!"
        }else if(parseInt(this.remaining) === 0){
          this.class = "message-alarm";
          this.message = "Oh No! You're now overdrawn! You've now used up more money than you have. Money is not infinite you need to take care to spend carefully."
        }else {
          this.class = "message-regular";
          this.message = "You dont have to spend all your allowance at once. Remember to save"
        }
    });



  }
}
