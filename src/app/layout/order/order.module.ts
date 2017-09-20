import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';


@NgModule({
    imports: [
        CommonModule,
        OrderRoutingModule,
        PageHeaderModule,
        FormsModule,
        ToasterModule,
        NgxPaginationModule
    ],
    declarations: [OrderComponent]
})
export class OrderModule { }
