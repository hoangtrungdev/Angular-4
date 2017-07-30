import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { LoadingModule } from '../../shared';



@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule,
      LoadingModule
  ],
  declarations: [
      DetailComponent
  ]
})
export class DetailModule { }
