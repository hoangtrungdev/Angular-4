import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { LoadingModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { FacebookModule } from 'ngx-facebook';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {}
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}


@NgModule({
    imports: [
        FacebookModule.forRoot(),
        CommonModule,
        DetailRoutingModule,
        LoadingModule,
        NgbModule.forRoot()
    ],
    declarations: [
        DetailComponent,
        SafePipe
    ]
})
export class DetailModule { }
