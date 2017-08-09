import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {ToasterService} from 'angular2-toaster';


import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.scss'],
    animations: [routerTransition()]
})
export class CouponComponent implements OnInit {
    public couponValue : any ;
    public couponPid : any ;
    public couponArray : any ;
    public db : any ;

    private toasterService: ToasterService;

    constructor(toasterService: ToasterService, db: AngularFireDatabase ) {
        this.toasterService = toasterService;
        this.db = db ;
        this.couponArray = db.list('/coupons')
    }
    public items: any[];
    public currentPage: number = 1;

    public addCoupon(){
        let self = this ;
        if (self.couponValue &&  self.couponPid) {
            self.db.list('coupons').push({
                value: this.couponValue,
                pid: this.couponPid,
                status: 'enable',
                createDate: new Date().getTime()
            })
            // reset form
            self.couponValue = '';
            self.couponPid = '';
            // show toaster thong bao
            self.toasterService.pop('success', 'Thông báo !', 'Tạo coupon thành công.');
        } else {
            this.toasterService.pop('error', 'Thông báo !', 'Vui lòng nhập đầy đủ thông tin .');
        }
    }
    ngOnInit() {

    }
}
