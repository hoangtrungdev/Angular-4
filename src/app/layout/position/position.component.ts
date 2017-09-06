import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import  *  as _ from 'lodash';

@Component({
    selector: 'app-position',
    templateUrl: './position.component.html',
    styleUrls: ['./position.component.scss'],
    animations: []

})
export class PositionComponent implements OnInit {

	public loading = false;
	public productArray: any;
    public db : any ;

    constructor(db: AngularFireDatabase) {
   		this.loading = true;
        this.productArray = [];
        this.db = db;

        db.list('/products').subscribe(items => {
        	this.productArray = items.filter( item => item.show ==true );
        	this.productArray = _.orderBy(this.productArray, ['sortValue'], ['asc']);
            this.loading = false;
        });
    }

    public save() {
        let self = this ;
        this.productArray.forEach((item, index) => {
            self.db.object('/products/'+ item.$key).update({
                sortValue : index + 1
            })
        })
    }

    ngOnInit() {
    }
}
