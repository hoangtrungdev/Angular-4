import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule }    from '@angular/forms';

import { RandomChartsRoutingModule } from './random-charts-routing.module';
import { RandomChartsComponent } from './random-charts.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        FormsModule,
        RandomChartsRoutingModule,
        PageHeaderModule
    ],
    declarations: [RandomChartsComponent]
})
export class RandomChartsModule { }
