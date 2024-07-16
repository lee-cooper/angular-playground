import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  template: `<nav class="nav ">
    <a routerLink="/input-output" class="link">input-output</a>
    <a routerLink="/ng-content" class="link">ng-content</a>
    <a routerLink="/reactive-forms" class="link">reactive-forms</a>
    <a routerLink="/drag-and-drop" class="link">drag-and-drop</a>
  </nav>`,
  styles: `
    .nav {
      width: 10rem;
      max-width: 10rem;

      .link {
        width: 100%;
        display: inline-block;
        text-align: center;
        padding: 1rem 0;
        border: 1px solid lightgray;
        border-style: inset;
      }
    }
  `,
  standalone: true,
  imports: [RouterLink],
})
export class NavigationComponent {}
