import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

@Component({
  selector: 'balance',
  template: `
<ion-card>

  <ion-card-header>
    {{balance}}
  </ion-card-header>

  <ion-card-content>
    <!-- Add card content here! -->
  </ion-card-content>

</ion-card>
   `
})
export class Balance {

  balance: string;
  constructor(private http:Http) {

    http.get('https://mlhprime.pandelis.me/api/v1/balance')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(balance => this.balance = balance.balance );

  }
}
