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
    public items: any[];

    constructor(private route: ActivatedRoute, db: AngularFireDatabase) {
        db.list('/products').subscribe(items => {
            this.items = items ;
        });
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id']; // (+) converts string 'id' to a number

        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
