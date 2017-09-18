import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import  *  as _ from 'lodash';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    animations: []

})
export class IndexComponent implements OnInit {

	public loading = false;
	public productArray: any;
	public perPage = 8;

    constructor(db: AngularFireDatabase) {
   		this.loading = true;
        this.productArray = [];
        db.list('/products').subscribe(items => {
        	this.productArray = items.filter( item => item.show == true );
        	this.productArray = _.orderBy(this.productArray, ['sortValue'], ['asc']);
            this.loading = false;
        });
    }

    public showMore(): void {
    	this.perPage += 8;

    }

    ngOnInit() {
    }
}
