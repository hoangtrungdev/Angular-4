import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as _ from "lodash";
import * as moment from 'moment';

@Component({
    selector: 'app-realtime-charts',
    templateUrl: './realtime-charts.component.html',
    styleUrls: ['./realtime-charts.component.scss'],
    animations: [routerTransition()]
})
export class RealtimeChartsComponent implements OnInit {
    public items: FirebaseListObservable<any[]>;

    constructor(db: AngularFireDatabase ) {
        this.items = db.list('/newOrder').map((array) => array.reverse()) as FirebaseListObservable<any[]>;
        this.items.subscribe(item => {
            this.ChartData[0].data = item.map((i) => {
                return {
                    date : moment(i.startedAt).format('DD-MM-YYYY'),
                    total : i.totalcal
                };
            })

            console.log(_.groupBy(this.ChartData[0].data , "date"))
        });
    }

    public ChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
    ];
    public ChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;



    private totalPrice = function(total, item){
    return total + item.totalcal;
}


    ngOnInit() {

    }
}
