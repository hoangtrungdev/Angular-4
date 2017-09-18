import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    animations: []
})
export class OrderComponent implements OnInit {
    public phoneInput : any ;
    public nameInput : any ;
    public closeResult: string;
    public curentItem: any;
    public db : any ;
    public currentCity : any = {};
    public currentDistrict : any = {} ;
    public currentTown : any  = {};


    constructor(db: AngularFireDatabase, private modalService: NgbModal  ) {
        this.db = db ;
        db.list('/newOrder').subscribe(items => {
            this.items = items.reverse() ;
            this.assignCopy()
        });
    }
    public selectItem(item) {
        let self = this;
        item.itemsincart = JSON.parse(item.itemsincart);
        this.curentItem = item;

        self.db.object('/city/' + item.city).subscribe(item => {
            self.currentCity = item ;
        })
        self.db.object('/district/' + item.district).subscribe(item => {
            self.currentDistrict = item ;
        })
        self.db.object('/town/' + item.town).subscribe(item => {
            self.currentTown = item ;
        })
    }
    /* modal*/
    open(content) {
        this.modalService.open(content, { windowClass: 'modify-modal'}).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
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
