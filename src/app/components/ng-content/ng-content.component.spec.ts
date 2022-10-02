import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionalProjectionComponent } from './conditional-projection/conditional-projection.component';
import { MultiSlotProjectionComponent } from './multi-slot-projection/multi-slot-projection.component';

import { NgContentComponent } from './ng-content.component';
import { SingleProjectionComponent } from './single-projection/single-projection.component';

describe('NgContentComponent', () => {
  let component: NgContentComponent;
  let fixture: ComponentFixture<NgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        NgContentComponent,
        SingleProjectionComponent,
        ConditionalProjectionComponent,
        MultiSlotProjectionComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
