import { Component, OnInit, OnDestroy } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
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


    constructor(private route: ActivatedRoute, db: AngularFireDatabase) {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
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
    }
    ngOnInit() {

    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
