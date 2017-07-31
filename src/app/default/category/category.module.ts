import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { LoadingModule } from '../../shared';

import { InfiniteScrollModule } from 'angular2-infinite-scroll';

@NgModule({
    imports: [
        CommonModule,
        CategoryRoutingModule,
        LoadingModule,
        InfiniteScrollModule
    ],
    declarations: [
        CategoryComponent
    ]
})
export class CategoryModule { }
