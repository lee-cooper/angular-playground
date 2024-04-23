import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { User, data } from './user-data';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, CdkDrag],
  template: `<div cdkDropListGroup class="users-container">
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
export class DragAndDropComponent {
  users: User[] = data;

  drop(dropEvent: CdkDragDrop<User[]>) {
    moveItemInArray(
      this.users,
      dropEvent.previousIndex,
      dropEvent.currentIndex,
    );
  }
}
