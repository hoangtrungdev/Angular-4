import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster';


import * as _ from "lodash";
import * as moment from 'moment';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss'],
    animations: []
})
export class SalesComponent implements OnInit {
    public phoneInput : any ;
    public nameInput : any ;
    public closeResult: string;
    public curentItem: any;
    public db : any ;
    public currentCity : any = {};
    public currentDistrict : any = {} ;
    public currentTown : any  = {};
    public arrayCustomer : any ;

    private toasterService: ToasterService;
    constructor(toasterService: ToasterService, db: AngularFireDatabase, private modalService: NgbModal  ) {
        this.contructorFunction(toasterService, db  )
    }
    async contructorFunction(toasterService, db ) {
        this.db = db ;
        this.toasterService = toasterService;
        this.arrayCustomer =  await this.getData('/customers');
        db.list('/sales').subscribe(items => {
            items = items.filter(item => item.status != '5');
            this.items = items.slice().reverse();
            this.items.map(item => {
                let dataCustomer : any =_.find(this.arrayCustomer, {'$key': item.customerID});
                if (dataCustomer) {
                    item.customerInfo = dataCustomer;
                }

            });
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

        if(itemClone.customerInfo) {
            self.db.object('/city/' + itemClone.customerInfo.city).subscribe(val => {
                self.currentCity = val ;
            });
            self.db.object('/district/' + itemClone.customerInfo.district).subscribe(val => {
                self.currentDistrict = val ;
            });
            self.db.object('/town/' + itemClone.customerInfo.town).subscribe(val => {
                self.currentTown = val ;
            })
        }

    }
    private getData(dataRef) {
        const self = this;
        return new Promise((resolve) =>{
                self.db.list(dataRef).subscribe(val => {
                    resolve(val) ;
                });
            }
        )
    }
    private addData(dataRef, data) {
        const self = this;
        return new Promise((resolve) =>{
            self.db.list(dataRef).push(data).then((item) => {
                resolve(item.key);
            });
        })
    }
    private updateData(dataRef, data) {
        const self = this;
        return new Promise((resolve) => {
            self.db.object(dataRef).update(data).then(function () {
                resolve();
            });
        })
    }

    public async changeStatus(data, value) {
        const self = this;
        let arrayProduct: any = await this.getData('/products');
        let dataUpdate: any = { status : value};
        let toastType = 'success', toastString = 'Thay đổi tình trạng thành công.';
        switch(value) {
            case 2:
                if(data.status == 4 || data.status == 5 ){
                    if ( data.itemsincart && data.itemsincart.length > 0 ) {
                        data.itemsincart.forEach(cart => {
                            let dataProduct : any =_.find(arrayProduct, {'pid': cart.id});
                            let newQuantity = dataProduct.quantity - cart.quantity;
                            self.updateData('/products/' + dataProduct.$key, {quantity : newQuantity});
                        })
                    }
                }
                break;
            case 3:
                if(data.status == 4 || data.status == 5 ){
                    if ( data.itemsincart && data.itemsincart.length > 0 ) {
                        data.itemsincart.forEach(cart => {
                            let dataProduct : any =_.find(arrayProduct, {'pid': cart.id});
                            let newQuantity = dataProduct.quantity - cart.quantity;
                            self.updateData('/products/' + dataProduct.$key, {quantity : newQuantity});
                        })
                    }
                }
                dataUpdate.endedAt = new Date().getTime();
                dataUpdate.dayend =  moment().format('DD-MM-YYYY');
                break;
            case 4 :
            case 5 : {
                if(data.status != 4 && data.status != 5 ){
                    if ( data.itemsincart && data.itemsincart.length > 0 ) {
                        data.itemsincart.forEach(cart => {
                            let dataProduct : any =_.find(arrayProduct, {'pid': cart.id});
                            let newQuantity = dataProduct.quantity + cart.quantity;
                            self.updateData('/products/' + dataProduct.$key, {quantity : newQuantity});
                        })
                    }
                }
                dataUpdate.endedAt = new Date().getTime();
                dataUpdate.dayend =  moment().format('DD-MM-YYYY');
                break;
            }
        }
        await this.updateData('/sales/' + data.key, dataUpdate);
        if(value == 5 ){
            toastType = 'success';
            toastString = 'Xóa hóa đơn thành công.';
            this.currentModal.close();
        }
        data.status = value;
        this.toasterService.pop(toastType, 'Thông báo !', toastString);


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
    public filterStatus (value) {
        if(value != 'tatca') {
            this.filteredItems = this.items.slice().filter(
                item => item.status == value
            )
        } else {
            this.filteredItems = this.items.slice();
        }
    }
    public filterName (value) {
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
