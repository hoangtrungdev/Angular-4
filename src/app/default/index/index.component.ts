import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    animations: [routerTransition()]

})
export class IndexComponent implements OnInit {

	public loading = false;
	public showButton = true;
	public productArray: any;
	public allProduct: any;
	public perPage = 8;

    constructor(db: AngularFireDatabase) {
   		this.loading = true;
        this.productArray = [];
        db.list('/products').subscribe(items => {
        	this.productArray = items.filter( item => item.show ==true );
            this.loading = false;
        });
    }

    public showMore(): void {
    	this.perPage += 8;
    	
    }

    ngOnInit() {
    }
}
