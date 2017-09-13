import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-Default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

    constructor(public router: Router) { }

    ngOnInit() {
        this.router.events.subscribe((e) => {
            window.scrollTo(0, 0)
        });
        if (this.router.url === '/') {
            this.router.navigate(['/trang-chu']);
        }
    }

}
