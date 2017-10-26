import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipRoutingModule } from './ship-routing.module';
import { ShipComponent } from './ship.component';
import { LoadingModule } from '../../shared';
import { FormsModule } from '@angular/forms';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@NgModule({
    imports: [
        CommonModule,
        ShipRoutingModule,
        LoadingModule,
        FormsModule,
        InfiniteScrollModule
    ],
    declarations: [
        ShipComponent
    ]
})
export class ShipModule { }
