import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToasterService } from 'angular2-toaster';


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
    public arrayCate : any ;
    public items: any[];
    public selectStatus: any = 'tatca';


    private toasterService: ToasterService;
    constructor(toasterService: ToasterService, db: AngularFireDatabase, private modalService: NgbModal  ) {
        this.contructorFunction(toasterService, db  )
    }
    async contructorFunction(toasterService, db ) {
        this.db = db ;
        this.toasterService = toasterService;
        db.list('/products').subscribe(items => {
            this.items = items.slice().reverse();
            this.assignCopy();
        });

        this.arrayCate =  await this.getData('/cates');
    }


    public selectItem(item) {
        let itemClone = {...item};
        itemClone.key = item.$key;
        this.curentItem = itemClone;
    }
    public resetCurentItem() {
        this.curentItem = {
            cate : null
        };
    }
    public async addOrUpdateProduct() {
        if(this.curentItem && this.curentItem.key){
            await this.updateData('/products/' + this.curentItem.key, this.curentItem);
            this.currentModal.close();
            this.toasterService.pop('success', 'Thông báo !', 'Cập nhật sản phẩm thành công.');
        } else {
            this.curentItem.sortValue = 0 ;
            await this.addData('/products/', this.curentItem);
            this.currentModal.close();
            this.toasterService.pop('success', 'Thông báo !', 'Thêm sản phẩm thành công.');
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
