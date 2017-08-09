import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {ToasterService} from 'angular2-toaster';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public name : any ;
    public password : any ;
    private toasterService: ToasterService;
    constructor(public router: Router, toasterService: ToasterService) {
        this.toasterService = toasterService;
        localStorage.removeItem('isLoggedin');
    }

    ngOnInit() {
    }

    onLoggedin() {
        if (this.name == 'hoangtrungdev' && this.password == 'trungdeptrai') {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/admin/dashboard']);
        } else{
            this.toasterService.pop('error', 'Thông báo !', 'Sai thông tin .Xin thử lại !!!!');
        }
    }

}
