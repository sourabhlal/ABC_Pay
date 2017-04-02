import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'spent',
  template: `
    {{balance}}
   `
})
export class Spent {

  balance: string;
  constructor(private http:Http) {
    
    let timer = Observable.timer(0,5000);
    timer.subscribe(t=> {
        http.get('https://mlhprime.pandelis.me/api/v1/remaining')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(balance => this.balance = balance.spent );
    });



  }
}
