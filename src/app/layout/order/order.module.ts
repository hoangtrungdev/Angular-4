import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        OrderRoutingModule,
        PageHeaderModule,
        FormsModule,
        ToasterModule,
        NgxPaginationModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger' // set defaults here
        })
    ],
    declarations: [OrderComponent]
})
export class OrderModule { }
