import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';

const routes: Routes = [
    {
        path: '', component: DefaultComponent ,
        children: [
            { path: 'trang-chu', loadChildren: './index/index.module#IndexModule' },
            { path: 'danh-muc', loadChildren: './category/category.module#CategoryModule' },
            { path: 'chi-tiet/:id', loadChildren: './detail/detail.module#DetailModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DefaultRoutingModule { }
