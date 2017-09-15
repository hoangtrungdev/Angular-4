import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    animations: [routerTransition()]
})
export class OrderComponent implements OnInit {
    public phoneInput : any ;
    public nameInput : any ;
    constructor(db: AngularFireDatabase  ) {
        db.list('/newOrder').subscribe(items => {
            this.items = items.reverse() ;
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
            item => this.removeTV(item.customer_phone).includes(this.removeTV(value))
        )
    }
    public filterName (value) {
        if(!value) this.assignCopy(); //when nothing has typed
        this.filteredItems = Object.assign([], this.items).filter(
            item => this.removeTV(item.customer_name).includes(this.removeTV(value))
        )
    }
    private removeTV(str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        return str;
    }

    public assignCopy(){
            this.filteredItems = Object.assign([], this.items);
        }
        ngOnInit() {

        }
    }
