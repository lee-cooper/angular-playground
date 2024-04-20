import { Component, OnInit } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UnderlineDirective } from '../../directives/underline.directive';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
    standalone: true,
    imports: [UnderlineDirective, TodoListComponent]
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
