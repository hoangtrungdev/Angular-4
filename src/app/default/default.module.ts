import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';

@NgModule({
    imports: [
        CommonModule,
        DefaultRoutingModule
    ],
    declarations: [DefaultComponent]
})
export class DefaultModule {
}
