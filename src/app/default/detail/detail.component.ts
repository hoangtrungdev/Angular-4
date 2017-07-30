import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    animations: [routerTransition()]
})
export class DetailComponent implements OnInit, OnDestroy{
    public id: any;
    private sub: any;
    public detailInfo: any;
    public loading = false;


    constructor(private router: Router, private route: ActivatedRoute, db: AngularFireDatabase) {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.detailInfo = null;
            this.loading = true;
            db.list('/products',{
                query: {
                    orderByChild: 'pid',
                    equalTo: this.id
                }
            }).subscribe(items => {
                this.detailInfo = items && items[0] ? items[0] : null ;
                if(this.detailInfo && this.detailInfo.detail_img){
                    this.detailInfo.detail_img = this.detailInfo.detail_img.split(';');
                }
                this.loading = false;
            });
        });

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
                item.quantity += 1 ;
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
