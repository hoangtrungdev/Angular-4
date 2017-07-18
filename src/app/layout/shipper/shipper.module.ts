import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipperComponent } from './shipper.component';
import { ShipperRoutingModule } from './shipper-routing.module';
import { PageHeaderModule } from './../../shared';


@NgModule({
    imports: [
        CommonModule,
        ShipperRoutingModule,
        PageHeaderModule
    ],
    declarations: [ShipperComponent]
})
export class ShipperModule { }
