import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() title: string | null = null;
  @Input() dueDate: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
