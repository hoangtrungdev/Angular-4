import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule }    from '@angular/forms';

import { RealtimeChartsRoutingModule } from './realtime-charts-routing.module';
import { RealtimeChartsComponent } from './realtime-charts.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        FormsModule,
        RealtimeChartsRoutingModule,
        PageHeaderModule
    ],
    declarations: [RealtimeChartsComponent]
})
export class RealtimeChartsModule { }
