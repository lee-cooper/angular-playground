import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  ViewContainerRef,
} from '@angular/core';
import { User, data } from './user-data';

// https://www.youtube.com/watch?v=ZfWCr8BzYHY

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag],
  template: ` <div class="example-boundary">
      <div class="example-box" cdkDragBoundary=".mat-drawer-content" cdkDrag>
        I can only be dragged within the parent container.
      </div>
    </div>

    <div cdkDropListGroup class="users-container">
      <div
        cdkDropList
        [cdkDropListData]="users"
        class="users-list"
        (cdkDropListDropped)="drop($event)"
      >
        @for (user of users; track user.id) {
          <div cdkDrag class="user">{{ user.name }}</div>
        }
      </div>
    </div>`,
  styleUrl: './drag-and-drop.component.scss',
})
export class DragAndDropComponent implements AfterViewInit, OnDestroy {
  users: User[] = data;

  drop(dropEvent: CdkDragDrop<User[]>) {
    moveItemInArray(
      this.users,
      dropEvent.previousIndex,
      dropEvent.currentIndex,
    );
  }

  private _overlayRef: OverlayRef;

  constructor(
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
  ) {
    this._overlayRef = this._overlay.create({});
  }

  ngAfterViewInit() {
    this._overlayRef = this._overlay.create({
      positionStrategy: this._overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });
    this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
  }

  ngOnDestroy() {
    this._overlayRef.dispose();
  }
}
