import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstAngularProjectComponent } from './My-First-Angular-Project.component';

describe('MyFirstAngularProjectComponent', () => {
    let component: MyFirstAngularProjectComponent;
    let fixture: ComponentFixture<MyFirstAngularProjectComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MyFirstAngularProjectComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MyFirstAngularProjectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
