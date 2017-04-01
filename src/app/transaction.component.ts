import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'transaction-history',
  template: `<ion-list>
    <button ion-item *ngFor="let transaction of transactions">
      {{transaction.merchant.emoji}}  {{transaction.merchant.name}}  {{transaction.amount}}
    </button>
  </ion-list>`
})
export class Transaction {

  public transactions: any[];
  constructor(http:Http) {
    
    let timer = Observable.timer(0,5000);
    timer.subscribe(t=> {
      try {
        http.get('https://mlhprime.pandelis.me/api/v1/transactions')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(transactions => this.transactions = transactions );
      } catch (error) {
        return [{merchant: {emoji: "Eror", name:"Error"},amount: "Error"}]
      }
        
    });



  }
}
