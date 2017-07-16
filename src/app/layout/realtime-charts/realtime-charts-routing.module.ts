import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealtimeChartsComponent } from './realtime-charts.component';

const routes: Routes = [
    { path: '', component: RealtimeChartsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RealtimeChartsRoutingModule { }
