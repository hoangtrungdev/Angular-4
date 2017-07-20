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
    constructor(db: AngularFireDatabase ) {
        this.items = db.list('/sales');
        this.getValueChart();
    }
    /* Daterangepicker */
    public daterange: any =  {
        start: moment().add(-7, 'days'),
        end: moment()
    };

    // can also be setup using the config service to apply to multiple pickers
    public options: any = {
        locale: { format: 'DD-MM-YYYY' },
        alwaysShowCalendars: false,
        ranges: {
            'Last 7 days': [moment().add(-7, 'days'), moment()],
            'Last months': [moment().add(-1, 'months'), moment()],
            'Last 12 Months': [moment().subtract(12, 'months'), moment()],
        }
    };

    public selectedDate(value: any) {
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.getValueChart()
    }
    public getValueChart() {
        this.items.subscribe(item => {
            this.ChartLabels = [];
            this.ChartData[0].data = [];
            this.ChartData[1].data = [];
            let seft  = this;
            let dataMap = item.map((i) => {
                if(i.status == 3){
                    return {
                        date : i.dayend,
                        endedAt : i.endedAt,
                        income : i.income,
                        profit : i.profit
                    };
                }
            })

            let abc : any  = _.groupBy(_.sortBy(dataMap, 'endedAt') , "date");
            _.mapValues(abc, function (obj, key) {
                let date = moment(key,'DD-MM-YYYY');
                if(seft.daterange.start.diff(date, 'days') < 0 && seft.daterange.end.diff(date, 'days') >= 0){
                    seft.ChartLabels.push(key);
                    console.log(obj)
                    seft.ChartData[0].data.push(_.sumBy(obj, 'income'));
                    seft.ChartData[1].data.push(_.sumBy(obj, 'profit'));
                }

            });
        });

    }
    /* Firebase */
    public items: FirebaseListObservable<any[]>;
    public ChartData: any[] = [
        { data: [], label: 'Total' },
        { data: [], label: 'Profit' },
    ];
    public ChartLabels: string[] = [];
    // public ChartData: any[] = [
    //     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
    // ];
    // public ChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];


    // events
    public chartClicked(e: any): void {
         console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    // bar chart
    public ChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public ChartType: string = 'bar';
    public ChartLegend: boolean = true;

    ngOnInit() {

    }
}
