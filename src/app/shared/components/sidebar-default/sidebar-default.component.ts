import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar-default',
    templateUrl: './sidebar-default.component.html',
    styleUrls: ['./sidebar-default.component.scss']
})
export class SidebarDefaultComponent {
    isActive = false;
    showMenu = '';
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
