import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  queries: {
    canvas: new ViewChild('lineCanvas')
 }
})
export class ContactPage {
  
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;

  constructor(public navCtrl: NavController) {

  }
  
  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

        type: 'line',
        data: {
            labels: ["03/30/2017", "03/31/2017", "04/01/2017"],
            datasets: [
                {
                    label: "Spending",
                    fill: true,
                    lineTension: 0.4,
                    backgroundColor: "rgba(200,19,100,0.3)",
                    borderColor: "rgba(200,19,100,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [6,12,3],
                    spanGaps: false,
                },
                {
                    label: "Allowance",
                    fill: true,
                    lineTension: 0.2,
                    backgroundColor: "rgba(75,192,192,0.3)",
                    borderColor: "rgba(75,192,192,1)",                    
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [8,8,8],
                    spanGaps: false,
                }
            ]
        },
        options: {
                scales: {
                    xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Month'
                            }
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 15
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'GBP'
                            }
                        }]
                },
        }

    });
 }


}
