import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from "lodash";


@Component({
    selector: 'app-sidebar-default',
    templateUrl: './sidebar-default.component.html',
    styleUrls: ['./sidebar-default.component.scss']
})
export class SidebarDefaultComponent implements OnInit {
    public cateArray: any;
    public loading = false;
    public  showMenu = '';
    public  isActive = false;

    constructor(private route: ActivatedRoute, db: AngularFireDatabase) {
        this.loading = true;
        this.cateArray = [];
        db.object('/cates').subscribe(items => {
            _.mapValues(items, (value, key) =>  {
                if(value.type == 'main_cate'){
                    this.cateArray.push({
                        name : value.name,
                        subArray :  db.list('/cates',{
                            query: {
                                orderByChild: 'dad',
                                equalTo: key
                            }
                        })
                    })
                } ;
            });

            this.loading = false;
        });
    }
    public addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
    ngOnInit() {
    }
}
