import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header-default',
    templateUrl: './header-default.component.html',
    styleUrls: ['./header-default.component.scss']
})
export class HeaderDefaultComponent implements OnInit {

    constructor(private translate: TranslateService, public router: Router) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992) {
              this.hideSidebar();
            }
        });
    }

    ngOnInit() {}

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('push-right');
    }
    hideSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.remove('push-right');
    }
}
