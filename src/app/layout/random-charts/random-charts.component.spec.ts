import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule }    from '@angular/forms';


import { PageHeaderModule } from './../../shared';

import { RandomChartsComponent } from './random-charts.component';

describe('ChartsComponent', () => {
    let component: RandomChartsComponent;
    let fixture: ComponentFixture<RandomChartsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                Ng2Charts,
                PageHeaderModule
            ],
            declarations: [ RandomChartsComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RandomChartsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
