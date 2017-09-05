import { Component, OnInit } from '@angular/core';
import {ToasterService} from 'angular2-toaster';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';


@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    animations: []

})
export class CartComponent implements OnInit {
    public db : any ;
    public cartArray : any = [] ;
    public cartCoupon : any = null ;
    public couponStep = 'quest';
    public couponText = '';
    public couponErrorMessage = '';
    public step = 'step1';
    public fee = 0;
    public customerPhone : any  = '';
    public customerInfo : any  = {};
    public cityArray : any = [];
    public districtArray : any  = [];
    public townArray : any  = [];
    public customerArray : any  = [];
    public currentInfo : any = {
        city : {} ,
        district : {} ,
        town : {}
    };

    private toasterService: ToasterService;

    constructor(toasterService: ToasterService, db: AngularFireDatabase) {
        this.db = db ;
        this.toasterService = toasterService;
        if(localStorage.getItem('cartInfo'))
            this.cartArray = JSON.parse(localStorage.getItem('cartInfo'));
        if(localStorage.getItem('customerPhone'))
            this.customerPhone = localStorage.getItem('customerPhone');
        if(localStorage.getItem('cartCoupon')){
            this.cartCoupon = JSON.parse(localStorage.getItem('cartCoupon'));
            this.couponStep = 'final';
        }

        // load cities
        this.cityArray = db.list('/city');
        this.districtArray = db.list('/district');
        this.townArray = db.list('/town');
        this.customerArray = db.list('/customers');
    }

    ngOnInit() {
    }
    public resetCoupon() {
        this.cartCoupon = null ;
        this.couponStep = 'input';
        localStorage.removeItem('cartCoupon');
    }
    public checkCoupon() {
        if (!this.couponText) {
            this.couponErrorMessage = 'Vui lòng nhập mã giảm giá.'
        } else {
            this.db.list('/coupons',{
                preserveSnapshot: true,
                query: {
                    orderByChild: 'code',
                    equalTo: this.couponText
                }
            }).subscribe(items => {
                if(items && items.length > 0 && items[0]) {
                    let couponDetail = items[0].val();
                    couponDetail.keyCoupon = items[0].key;
                    if (couponDetail.status == 'enable') {
                        if (_.includes(_.map(this.cartArray, 'pid'), couponDetail.pid)) {
                            this.couponErrorMessage = '';
                            this.cartCoupon = couponDetail ;
                            localStorage.setItem('cartCoupon', JSON.stringify(this.cartCoupon));
                            this.couponStep = 'final';
                            this.toasterService.pop('success', 'Thông báo !', 'Nhập mã giảm giá thành công .');
                        } else {
                            this.couponErrorMessage = 'Rất tiếc, mã giảm giá này không áp dụng cho sản phẩm bạn chọn.'
                        }
                    } else {
                        this.couponErrorMessage = 'Rất tiếc, mã giảm giá này đã được sử dụng.'
                    }


                } else {
                    this.couponErrorMessage = 'Mã giảm giá không tồn tại. Vui lòng nhập lại mã giảm giá.'
                }
            });
        }
    }

    public getTotalCart(array) {
        let totalObj = {
            price : 0 ,
            sale_price : 0 ,
            promotion_price : 0
        };
        array.map( item => {
            totalObj.price += item.quantity * item.price;
            if (item.saleoff) {
                totalObj.sale_price += item.quantity * item.sale_price;
                totalObj.promotion_price += item.quantity * (item.price - item.sale_price);
            } else {
                totalObj.sale_price += item.quantity * item.price;
            }
        })
        return totalObj;
    }

    public deleteCartItem(index) {
        this.cartArray.splice(index , 1);
        localStorage.setItem('cartInfo', JSON.stringify(this.cartArray));
    }
    public changeQuantityCartItem(item, value) {
        if( value == -1 && item.quantity == 1) {

        } else {
            item.quantity  += value ;
        }
        localStorage.setItem('cartInfo', JSON.stringify(this.cartArray));
    }
    public nextStep(step, delay = 0) {
        let self = this ;
        switch(step) {
            case 'step1': {
                self.step = 'step2';
                break;
            }
            case 'step2': {
                if( self.checkPhoneNumber( self.customerPhone ) && self.customerPhone != ''){
                    self.step = 'step3';
                    localStorage.setItem('customerPhone', self.customerPhone);
                    self.toasterService.pop('success', 'Thông báo !', 'Nhập số điện thoại thành công .');
                    self.customerInfo = {
                        address : '' ,
                        name : '' ,
                        district : '' ,
                        town : '' ,
                        city : ''
                    }
                    self.db.list('/customers',{
                        query: {
                            orderByChild: 'phone',
                            equalTo: self.customerPhone
                        }
                    }).subscribe(items => {
                        items.map( cus => {
                            if ( cus.phone == self.customerPhone) {
                                self.customerInfo = {
                                    hasHistory : true ,
                                    address : cus.address ,
                                    name : cus.name ,
                                    district : cus.district ,
                                    town : cus.town ,
                                    city : cus.city
                                }
                                self.changeCity(cus.city);
                                self.changeDistrict(cus.district);
                                self.changeTown(cus.town);
                            }
                        })
                    });

                }else {
                    self.toasterService.pop('error', 'Thông báo !', 'Vui lòng nhập số điện thoại đúng định dạng .');
                }
                break;
            }
            case 'step3': {
                if( self.customerInfo.name != '' && self.customerInfo.address != '' && self.customerInfo.city != '' && self.customerInfo.town != '' && self.customerInfo.district != ''){
                    self.step = 'step4';
                }else {
                    self.toasterService.pop('error', 'Thông báo !', 'Vui lòng nhập đầy đủ thông tin .');
                }
                break;
            }
            case 'step4': {
                let arrayCartSave =[] ;
                self.cartArray.map(item => {
                    arrayCartSave.push({
                        "code": item.pid,
                        "id": item.pid,
                        "avatar": item.avatar,
                        "saleoff": item.saleoff,
                        "normal_price": item.price,
                        "sale_price": item.sale_price,
                        "quantity": item.quantity
                    })
                });
                self.db.list('newOrder').push({
                    itemsincart: JSON.stringify(arrayCartSave),
                    totalcal: self.getTotalCart(self.cartArray).price,
                    discount: self.getTotalCart(self.cartArray).promotion_price,
                    coupon : self.cartCoupon,
                    customer_name: self.customerInfo.name,
                    customer_address: self.customerInfo.address,
                    customer_phone: self.customerPhone,
                    fee: self.fee,
                    city: self.customerInfo.city,
                    district: self.customerInfo.district,
                    town: self.customerInfo.town,
                    handle: 0,
                    startedAt: new Date().getTime()
                });
                self.step = 'final';

                // reset value
                self.cartArray = [] ;
                localStorage.setItem('cartInfo', JSON.stringify(self.cartArray));
                self.fee = 0;
                self.customerPhone  = '';
                self.customerInfo  = {};
                self.currentInfo = {
                    city : {} ,
                    district : {} ,
                    town : {}
                };
                self.toasterService.pop('success', 'Thông báo !', 'Đặt hàng thành công .');
                //reset coupon
                if(self.cartCoupon && self.cartCoupon.keyCoupon) {
                    self.db.object('/coupons/'+ self.cartCoupon.keyCoupon).update({
                        status : 'used'
                    }).then(function () {
                        self.resetCoupon();
                    });
                }

                break;
            }
            default: {
                self.step = 'step1' ;
                break;
            }
        }
    }
    public prevStep(step, delay = 0) {
        let self = this ;
        switch(step) {
            case 'step2': {
                self.step = 'step1';
                break;
            }
            case 'step3': {
                self.step = 'step2';
                break;
            }
            case 'step4': {
                self.step = 'step3';
                break;
            }
            default: {
                self.step = 'step1' ;
                break;
            }
        }
    }

    // check phonenumber
    private checkPhoneNumber(value) {
        let phoneno = /^([0-9]{10,11})$/;
        if (value.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }
    public changeDistrict(district){
        this.db.object('/district/'+district).subscribe(item => {
            this.currentInfo.district = item ;
            this.fee  = +item.fee;
            this.townArray = this.db.list('town',{
                query: {
                    orderByChild: 'district',
                    equalTo: district
                }
            })
        })

    }
    public changeCity(city){
        this.db.object('/city/'+city).subscribe(item => {
            this.currentInfo.city = item ;
            this.districtArray = this.db.list('district',{
                query: {
                    orderByChild: 'city',
                    equalTo: city
                }
            })
        })

    }
    public changeTown(town){
        this.db.object('/town/'+town).subscribe(item => {
            this.currentInfo.town = item ;
        })

    }

}
