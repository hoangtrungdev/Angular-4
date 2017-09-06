import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PositionRoutingModule } from './position-routing.module';
import { PositionComponent } from './position.component';
import { LoadingModule } from '../../shared';
import { SortablejsModule } from 'angular-sortablejs';

@NgModule({
    imports: [
        CommonModule,
        PositionRoutingModule,
        LoadingModule,
        SortablejsModule
    ],
    declarations: [PositionComponent]
})
export class PositionModule { }
