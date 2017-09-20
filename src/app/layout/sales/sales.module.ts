import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        SalesRoutingModule,
        PageHeaderModule,
        FormsModule,
        ToasterModule,
        NgxPaginationModule,
        ConfirmationPopoverModule.forRoot({
            confirmButtonType: 'danger' // set defaults here
        })
    ],
    declarations: [SalesComponent]
})
export class SalesModule { }
