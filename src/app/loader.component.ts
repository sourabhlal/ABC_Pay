import { Component } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';


@Component({
  selector: 'remaining-loader',
  template: `
    <div class="loader {{class}}" [ngStyle]="{width: style}">
      <p class="percent">{{percent}} % left</p>
    </div>
   `
})
export class LoaderRemaining {
  class: string;
  percent: string;
  style: string;

   formatGBP(int: number){
      let str = int.toString()
      if (int < 0){
          return '-£' + str.slice(1,-2) + '.' + str.slice(-2)
      }
      return '£' + str.slice(0,-2) + '.' + str.slice(-2)
    }

  constructor(private http:Http) {
    
    let timer = Observable.timer(0,5000);
    timer.subscribe(t=> {
        http.get('https://mlhprime.pandelis.me/api/v1/remaining')
        // Call map on the response observable to get the parsed people object
        .map(res => res.json())
        // Subscribe to the observable to get the parsed people object and attach it to the
        // component
        .subscribe(data => this.percent = data.percentage);

        if(parseInt(this.percent) < 30){
          this.style = this.percent + '%';
          this.class = ",low-balance"
        }if(parseInt(this.percent) === 0){
          this.style = "100%"
          this.class = ", overdrawn"
        }else {
          this.style = this.percent + '%'
          this.class = ", positive-balance"
        }
    });



  }
}
