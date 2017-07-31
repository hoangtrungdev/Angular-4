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
    public perPage = 2 ;
    public numberShow = 2 ;

    constructor(private route: ActivatedRoute, db: AngularFireDatabase) {

        this.sub = this.route.params.subscribe(params => {
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

    onScrollDown () {
        this.numberShow += this.perPage ;
    }

    ngOnInit() {
    }
}
