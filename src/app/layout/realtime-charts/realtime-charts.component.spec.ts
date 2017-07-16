import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChartsModule as Ng2Charts } from 'ng2-charts';
import { FormsModule }    from '@angular/forms';


import { PageHeaderModule } from './../../shared';

import { RealtimeChartsComponent } from './realtime-charts.component';

describe('ChartsComponent', () => {
    let component: RealtimeChartsComponent;
    let fixture: ComponentFixture<RealtimeChartsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                FormsModule,
                Ng2Charts,
                PageHeaderModule
            ],
            declarations: [ RealtimeChartsComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RealtimeChartsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
