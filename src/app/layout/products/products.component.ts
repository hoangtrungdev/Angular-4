import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster';


import * as _ from "lodash";
import * as moment from 'moment';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
    animations: []
})
export class ProductsComponent implements OnInit {
    public closeResult: string;
    public curentItem: any;
    public db : any ;
    public currentCity : any = {};
    public currentDistrict : any = {} ;
    public currentTown : any  = {};
    public arrayCustomer : any ;
    public items: any[];
    public selectStatus: any = 'tatca';


    private toasterService: ToasterService;
    constructor(toasterService: ToasterService, db: AngularFireDatabase, private modalService: NgbModal  ) {
        this.contructorFunction(toasterService, db  )
    }
    async contructorFunction(toasterService, db ) {
        this.db = db ;
        this.toasterService = toasterService;
        this.arrayCustomer =  await this.getData('/customers');
        db.list('/products').subscribe(items => {
            this.items = items.slice().reverse();
            this.assignCopy();
            this.filterStatus();
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
    private deleteData(dataRef, key) {
        const self = this;
        return new Promise((resolve) => {
            self.db.list(dataRef).remove(key).then(function () {
                resolve();
            });
        })
    }

    public async deleteProduct(key) {
        await this.deleteData('/products/', key);
        this.toasterService.pop('success', 'Thông báo !', 'Xóa sản phẩm hàng thành công.');
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


    public currentPage: number = 1;

    /* filter */
    public filteredItems : any[];
    public filterStatus () {
        let value = this.selectStatus;
        if(value != 'tatca') {
            this.filteredItems = this.items.slice().filter(
                item => item.status == value
            )
        } else {
            this.filteredItems = this.items.slice();
        }
    }


    public assignCopy(){
        this.filteredItems = this.items.slice();
    }
    ngOnInit() {

    }
}
