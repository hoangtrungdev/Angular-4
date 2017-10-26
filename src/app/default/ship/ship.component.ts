import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-ship',
    templateUrl: './ship.component.html',
    styleUrls: ['./ship.component.scss'],
    animations: []
})
export class ShipComponent implements OnInit {
    public id: any;
    public cityArray: any;
    public districtArray: any;
    public city: any = '';
    public district: any = '';
    public db: any ;

    constructor( db: AngularFireDatabase) {
        this.db = db;
        this.cityArray = db.list('/city');
        this.districtArray = db.list('/district');
    }
    public changeCity(city){
        let self = this;
        this.district = '';
        self.districtArray = self.db.list('district',{
            query: {
                orderByChild: 'city',
                equalTo: city.$key
            }
        });
    }

    ngOnInit() {
    }
}
