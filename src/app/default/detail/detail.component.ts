import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss'],
    animations: [routerTransition()]
})
export class DetailComponent implements OnInit {
    constructor() {
    }
    ngOnInit() {
    }
}
