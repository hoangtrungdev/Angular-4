import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { ToasterModule } from 'angular2-toaster';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule,
        ToasterModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
