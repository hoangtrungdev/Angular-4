import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
    animations: [routerTransition()]
})
export class CategoryComponent implements OnInit {
    public id: any;
    private sub: any;
    public productArray: any;
    public loading = false;
    public perPage = 8 ;
    public numberShow = 8 ;

    constructor(private route: ActivatedRoute, db: AngularFireDatabase) {
        this.sub = this.route.params.subscribe(params => {
            this.numberShow = 8;
            this.id = params['id'];
            this.loading = true;
            this.productArray = [];
            db.list('/products',{
                query: {
                    orderByChild: 'cate',
                    equalTo: this.id
                }
            }).subscribe(items => {
                this.productArray = items.filter( item => item.show ==true ) ;
                this.loading = false;
            });
        });

    }
    //--------------------
    showMore () {
        this.numberShow += this.perPage ;
    }

    ngOnInit() {
    }
}
