import { Component } from '@angular/core';
import { MultiSlotProjectionComponent } from './multi-slot-projection/multi-slot-projection.component';
import { SingleProjectionComponent } from './single-projection/single-projection.component';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.scss'],
  standalone: true,
  imports: [SingleProjectionComponent, MultiSlotProjectionComponent],
})
export class NgContentComponent {}
