import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomChartsComponent } from './random-charts.component';

const routes: Routes = [
    { path: '', component: RandomChartsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RandomChartsRoutingModule { }
