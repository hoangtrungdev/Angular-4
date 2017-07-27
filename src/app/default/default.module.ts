import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { HeaderDefaultComponent, SidebarDefaultComponent } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        DefaultRoutingModule,
        TranslateModule
    ],
    declarations: [
        DefaultComponent,
        HeaderDefaultComponent,
        SidebarDefaultComponent
    ]
})
export class DefaultModule { }
