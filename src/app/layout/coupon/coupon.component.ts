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
    public couponLength : any = 8 ;
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

    private makeCoupon(length = 8) {
        let text = "";
        let possibleChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < length; i++)
            text += possibleChar.charAt(Math.floor(Math.random() * possibleChar.length));
        return text;
    }

    public addCoupon(){
        let self = this ;
        if (self.couponValue &&  self.couponPid) {
            self.db.list('coupons').push({
                code : this.makeCoupon(this.couponLength),
                value: this.couponValue,
                pid: this.couponPid,
                status: 'enable',
                createDate: new Date().getTime()
            });
            // reset form
            self.couponValue = '';
            self.couponPid = '';
            // show toaster thong bao
            self.toasterService.pop('success', 'Thông báo !', 'Tạo coupon thành công.');
        } else {
            this.toasterService.pop('error', 'Thông báo !', 'Vui lòng nhập đầy đủ thông tin .');
        }
    }
    public deleteCoupon(key){
        let self = this ;
        self.db.object(`coupons/${key}`).remove().then(function () {
            self.toasterService.pop('success', 'Thông báo !', 'Xóa coupon thành công.');
        });
    }

    ngOnInit() {

    }
}
