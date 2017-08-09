import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponComponent } from './coupon.component';
import { CouponRoutingModule } from './coupon-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';

@NgModule({
    imports: [
        CommonModule,
        CouponRoutingModule,
        PageHeaderModule,
        FormsModule,
        NgxPaginationModule,
        ToasterModule
    ],
    declarations: [CouponComponent]
})
export class CouponModule { }
