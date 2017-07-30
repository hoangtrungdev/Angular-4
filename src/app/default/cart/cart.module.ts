import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';

import { FormsModule } from '@angular/forms';

import { ToasterModule } from 'angular2-toaster';


@NgModule({
    imports: [
        CommonModule,
        CartRoutingModule,
        FormsModule,
        ToasterModule
    ],
    declarations: [CartComponent]
})
export class CartModule { }
