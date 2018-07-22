import { Component, OnInit } from '@angular/core';
import { ServisService } from '../servis.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  chart = [];

  constructor(private _servis: ServisService) { }

  ngOnInit() {
    this._servis.vrati()
      .subscribe(res => {

        let ime = res['Baza'].map(res => res.cst_org_name_dn);
        let vrednost = res['Baza'].map(res => res.netAmount);
        let tmp;

        for( let i = 0; i < 285; i++){
          tmp = parseFloat(vrednost[i]).toFixed(2);
          vrednost[i] = tmp;
        }        

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: ime,
            datasets: [
              {
                data: vrednost,
                borderColor: '#19667f',
                backgroundColor: '#33ccff',
                fill: true
              }
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }],
            }
          }
        })

      })
  }
}
