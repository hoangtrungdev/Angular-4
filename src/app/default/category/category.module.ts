import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { LoadingModule } from '../../shared';


@NgModule({
  imports: [
    CommonModule,
    CategoryRoutingModule,
      LoadingModule
  ],
  declarations: [
      CategoryComponent
  ]
})
export class CategoryModule { }
