import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    animations: []
})
export class DetailComponent implements OnInit, OnDestroy{
    public id: any;
    private sub: any;
    public detailInfo: any;
    public loading = false;
    public db : any ;
    public arrayProducts : any = [] ;

    constructor(private router: Router, private route: ActivatedRoute, db: AngularFireDatabase) {
        this.db = db ;
        this.constructorFunction();
    }
    private async constructorFunction () {
        let self = this ;
        self.arrayProducts =  await self.getData('/products');
        self.sub =  self.route.params.subscribe(params => {
            self.id = params['id'];
            self.detailInfo = null;
            self.loading = true;
            self.db.list('/products',{
                query: {
                    orderByChild: 'pid',
                    equalTo: self.id
                }
            }).subscribe(items => {
                self.detailInfo = items && items[0] ? items[0] : null ;
                if(self.detailInfo && self.detailInfo.detail_img){
                    self.detailInfo.detail_img = self.detailInfo.detail_img.split(';');
                }
                if(self.detailInfo && self.detailInfo.group){
                    self.detailInfo.group = self.detailInfo.group.split(';');
                    self.detailInfo.groupProductList = self.arrayProducts.filter( item => {
                        return self.detailInfo.group.includes(item.pid)
                    });
                    console.log(self.detailInfo.groupProductList );

                }
                self.loading = false;
            });
        });
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

    public addToCart(detailInfo): void {
        let cartArray: any = [];
        if (localStorage.getItem('cartInfo')) {
            cartArray = JSON.parse(localStorage.getItem('cartInfo'));
        }
        // check ton tai
        let exist = false ;
        cartArray.map( item => {
            if (item.pid == detailInfo.pid){
                item.quantity = 1 ;
                exist = true ;
            }
        });
        // neu chua ton tai trong gio hang
        if (exist == false) {
            // set quantity thanh 1
            detailInfo.quantity = 1;
            // push vao cartArray
            cartArray.push(detailInfo);
        }

        localStorage.setItem('cartInfo', JSON.stringify(cartArray));
        this.router.navigateByUrl('gio-hang');
    }

    ngOnInit() {

    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
