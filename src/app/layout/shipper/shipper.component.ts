import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
@Component({
    selector: 'app-shipper',
    templateUrl: './shipper.component.html',
    styleUrls: ['./shipper.component.scss'],
    animations: [routerTransition()]
})
export class ShipperComponent implements OnInit {
    public items: FirebaseListObservable<any[]>;
    constructor(db: AngularFireDatabase) {
        this.items = db.list('/newOrder').map((array) => array.reverse()) as FirebaseListObservable<any[]>;
    }
    ngOnInit() { }
}
