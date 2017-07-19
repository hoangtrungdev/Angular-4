import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        OrderRoutingModule,
        PageHeaderModule,
        FormsModule,
        NgxPaginationModule
    ],
    declarations: [OrderComponent]
})
export class OrderModule { }
