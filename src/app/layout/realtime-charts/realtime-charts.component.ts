import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as _ from "lodash";
import * as moment from 'moment';

@Component({
    selector: 'app-realtime-charts',
    templateUrl: './realtime-charts.component.html',
    styleUrls: ['./realtime-charts.component.scss'],
    animations: []
})
export class RealtimeChartsComponent implements OnInit {
    /* Firebase */
    public items: FirebaseListObservable<any[]>;
    public dataStatistical: any = {};
    public ChartData: any[] = [
        { data: [], label: 'Doanh thu' },
        { data: [], label: 'Lợi nhuận' },
    ];
    public ChartLabels: string[] = [];


    /* Daterangepicker */
    public daterange: any =  {
        start: moment().startOf('month'),
        end: moment()
    };
    constructor(db: AngularFireDatabase ) {
        this.items = db.list('/sales');
        this.getValueChart();
    }

    // can also be setup using the config service to apply to multiple pickers
    public options: any = {
        locale: { format: 'DD/MM/YYYY' },
        alwaysShowCalendars: false,
        ranges: {
            'Tuần này': [moment().startOf('week'), moment()],
            'Tháng này': [moment().startOf('month'), moment()],
            '7 ngày trước': [moment().add(-7, 'days'), moment()],
            '1 tháng trước': [moment().add(-1, 'months'), moment()]
        }
    };

    public selectedDate(value: any) {
        console.log('value.end', value.end)
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.getValueChart()
    }
    public getValueChart() {
        this.items.subscribe(item => {
            // data chart
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
                if(seft.daterange.start.diff(date, 'days') <= 0 && seft.daterange.end.diff(date, 'days') >= 0){
                    seft.ChartLabels.push(key);
                    seft.ChartData[0].data.push(_.sumBy(obj, 'income'));
                    seft.ChartData[1].data.push(_.sumBy(obj, 'profit'));
                }
            });
            // data thong ke
            let dataFilterDate = item.filter(val => {
                if (val.endedAt) {
                    let date = moment(val.dayend,'DD-MM-YYYY');
                    return (seft.daterange.start.diff(date, 'days') <= 0 && seft.daterange.end.diff(date, 'days') >= 0)
                } else {
                    return false;
                }
            });
            this.dataStatistical = {
                totalIncome : _.sumBy(dataFilterDate.filter(val => val.status == 3), 'income'),
                totalProfit : _.sumBy(dataFilterDate.filter(val => val.status == 3), 'profit'),
                totalSuccess : dataFilterDate.filter(val => val.status == 3).length
            };
        });

    }

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
