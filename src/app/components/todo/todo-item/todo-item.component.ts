import { Component, Input, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatCard, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardTitle,
        MatCardSubtitle,
        MatCardContent,
        MatDivider,
        MatCardActions,
        MatButton,
    ],
})
export class TodoItemComponent implements OnInit {
  @Input() title: string | null = null;
  @Input() dueDate: string | null = null;

  constructor() {}

  ngOnInit(): void {}
}
