import { Routes } from '@angular/router';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { PracticeComponent } from './components/reactive-forms/practice/practice.component';
import { TodoComponent } from './components/todo';

export const routes: Routes = [
  {
    path: 'input-output',
    component: InputOutputComponent,
  },
  {
    path: 'ng-content',
    component: NgContentComponent,
  },
  {
    path: 'reactive-forms',
    component: PracticeComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'drag-and-drop',
    component: DragAndDropComponent,
  },
];
