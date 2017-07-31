import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { LoadingModule } from '../../shared';
import { NgClass } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    LoadingModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
