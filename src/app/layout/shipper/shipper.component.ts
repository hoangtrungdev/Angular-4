import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http , Headers , RequestOptions } from '@angular/http';

@Component({
    selector: 'app-shipper',
    templateUrl: './shipper.component.html',
    styleUrls: ['./shipper.component.scss'],
    animations: [routerTransition()]
})
export class ShipperComponent implements OnInit {
    constructor(db: AngularFireDatabase , private http: Http ) {
        this.items = db.list('/newOrder').map((array) => array.reverse()) as FirebaseListObservable<any[]>;
    }
    public items: FirebaseListObservable<any[]>;


    public guiDonHang(e: any): void {
        alert('Dang xay dung !!!!')
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // //headers.append('Token', '892eB0F6da562F019AD4e045ef67D971B3417221');
        //
        // let options = new RequestOptions({ headers: headers });
        // // this.http.get('https://dev.giaohangtietkiem.vn/authentication-request-sample', options).subscribe(data => {
        // //     // Read the result field from the JSON response.
        // //     console.log('data', data)
        // // });
        // this.http.get('https://apin.chudu24.com/commons/get-all-nhacungcap', options).subscribe(data => {
        //     // Read the result field from the JSON response.
        //     console.log('data', JSON.parse(data['_body']))
        // });
    }

    ngOnInit() {

    }
}
