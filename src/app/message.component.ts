import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'message',
  template: `
<ion-icon name="alert" style="color: {{color}}"></ion-icon>  {{message}}
   `
})
export class Message {
  color: string;
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

    this.color = "red";
    
    let timer = Observable.timer(0,5000);
    timer.subscribe(t=> {
        http.get('https://mlhprime.pandelis.me/api/v1/remaining')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(data => this.remaining = data.percentage);
        this.color = "red"
        if(parseInt(this.remaining) < 30){
          this.message = "Looks like you're getting low on todays spening money Swift. Make sure not to overspend!"
        }if(parseInt(this.remaining) === 0){
          this.message = "Oh No! You're now overdrawn! You've now used up more money than you have. Money is not infinite you need to take care to spend carefully."
        }else {
          this.color = "#2eb82e"
          this.message = "You dont have to spend all your allowance at once. Remember to save"
        }
    });



  }
}
