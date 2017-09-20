import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster';


import * as _ from "lodash";
import * as moment from 'moment';

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

    private toasterService: ToasterService;
    constructor(toasterService: ToasterService, db: AngularFireDatabase, private modalService: NgbModal  ) {
        this.db = db ;
        this.toasterService = toasterService;

        db.list('/newOrder').subscribe(items => {
            this.items = items.slice().reverse();
            this.assignCopy()
        });
    }
    // xem chi tiết đơn đặt hàng
    public selectItem(item) {
        const self = this;
        let itemClone = {...item};
        itemClone.key = item.$key;
        if(typeof itemClone.itemsincart == 'string')
            itemClone.itemsincart = JSON.parse(itemClone.itemsincart);
        this.curentItem = itemClone;

        self.db.object('/city/' + itemClone.city).subscribe(val => {
            self.currentCity = val ;
        })
        self.db.object('/district/' + itemClone.district).subscribe(val => {
            self.currentDistrict = val ;
        })
        self.db.object('/town/' + itemClone.town).subscribe(val => {
            self.currentTown = val ;
        })
    }
    // tạo hóa đơn
    private getlistProduct() {
        const self = this;
        return new Promise((resolve) =>{
                self.db.list('/products').subscribe(val => {
                    resolve(val) ;
                });
            }
        )
    }
    private addData(dataRef,data) {
        const self = this;
        return new Promise((resolve) =>{
            self.db.list(dataRef).push(data).then((item) => {
                resolve(item.key);
            });
        })
    }
    private updateData(dataRef,data) {
        const self = this;
        return new Promise((resolve) => {
            self.db.object(dataRef).update(data).then(function () {
                resolve();
            });
        })
    }
    public async createSale(data) {
        const self = this;
        let arrayProduct: any = await this.getlistProduct();
        let income = (data.totalcal ? data.totalcal : 0)
            - (data.discount ? data.discount : 0)
            - ((data.coupon && data.coupon.value) ? data.coupon.value : 0);

        let totalquantity = 0;
        let total_inprice = 0;

        if ( data.itemsincart && data.itemsincart.length > 0 ) {
            data.itemsincart.forEach(cart => {
                let dataProduct : any =_.find(arrayProduct, {'pid': cart.id});
                total_inprice += dataProduct.inprice * cart.quantity;
                let newQuantity = dataProduct.quantity - cart.quantity;
                self.updateData('/products/' + dataProduct.$key, {quantity : newQuantity});

            })
        }
        let profit = income - total_inprice;
        let customerID : any ;

        if(!data.customer_id) {
            let customerInput : any = {
                name: data.customer_name,
                phone: data.customer_phone,
                address: data.customer_address,
                city: data.city,
                district: data.district,
                town: data.town
            };
            customerID = await this.addData('/customers',customerInput);
        } else {
            customerID = data.customer_id;
        }
        let salesInput : any = {
            totalcal: data.totalcal,
            discount: data.discount,
            coupon: ((data.coupon && data.coupon.value) ? data.coupon.value : 0),
            profit: profit,
            income: income,
            totalquantity: totalquantity,
            deliveryfee: data.fee,
            type: 2,
            status: '1',
            note: data.note ? data.note : '',
            payment: '1',
            customerID: customerID,
            startedAt: new Date().getTime(),
            daystart: moment().format('DD-MM-YYYY'),
            endedAt: '0',
            dayend: '0',
            itemsincart: JSON.stringify(data.itemsincart)
        };

        await this.addData('/sales',salesInput);
        await this.updateData('/newOrder/' + data.key,{ handle: 3 });
        window.print()
        this.currentModal.close();
        this.toasterService.pop('success', 'Thông báo !', 'Tạo hóa đơn thành công.');

    }
    public printDiv(): any {
        window.print()
    }
    /* modal*/
    public currentModal: any;
    public open(content) {
        this.currentModal = this.modalService.open(content, { windowClass: 'modify-modal'});
        this.currentModal.result.then((result) => {
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
        this.filteredItems = this.items.slice().filter(
            item => this.removeTV(item.customer_phone).includes(this.removeTV(value))
        )
    }
    public filterName (value) {
        if(!value) this.assignCopy(); //when nothing has typed
        this.filteredItems = this.items.slice().filter(
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
        this.filteredItems = this.items.slice();
    }
    ngOnInit() {

    }
}
