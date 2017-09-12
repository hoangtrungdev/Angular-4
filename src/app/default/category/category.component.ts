import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss'],
    animations: []
})
export class CategoryComponent implements OnInit {
    public id: any;
    public cateInfo: any;
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
            db.object('/cates/'+this.id).subscribe(item => {
                this.cateInfo = item ;
            })

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
