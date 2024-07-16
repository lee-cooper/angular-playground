import { Component } from '@angular/core';
import { UnderlineDirective } from '../../directives/underline.directive';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  standalone: true,
  imports: [UnderlineDirective, TodoListComponent],
})
export class TodoComponent {}
