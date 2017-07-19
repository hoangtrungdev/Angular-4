import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http , Headers , RequestOptions } from '@angular/http';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    animations: [routerTransition()]
})
export class OrderComponent implements OnInit {
    constructor(db: AngularFireDatabase , private http: Http ) {
        db.list('/newOrder').subscribe(items => {
            this.items = items ;
            this.assignCopy()
        });
    }
    public items: any[];
    public currentPage: number = 1;

    /* filter */
    public filteredItems : any[];
    public filterPhone (value) {
        if(!value) this.assignCopy(); //when nothing has typed
        this.filteredItems = Object.assign([], this.items).filter(
            item => item.customer_phone.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
    }
    public filterName (value) {
        if(!value) this.assignCopy(); //when nothing has typed
        this.filteredItems = Object.assign([], this.items).filter(
            item => item.customer_name.toLowerCase().indexOf(value.toLowerCase()) > -1
        )
    }
    public assignCopy(){
        this.filteredItems = Object.assign([], this.items);
    }
    ngOnInit() {

    }
}
