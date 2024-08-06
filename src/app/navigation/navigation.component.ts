import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  template: `<nav class="nav">
    <a routerLink="/input-output" class="link" routerLinkActive="active"
      >input-output</a
    >
    <a routerLink="/ng-content" class="link" routerLinkActive="active"
      >ng-content</a
    >
    <a routerLink="/reactive-forms" class="link" routerLinkActive="active"
      >reactive-forms</a
    >
    <a routerLink="/drag-and-drop" class="link" routerLinkActive="active"
      >drag-and-drop</a
    >
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
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        border-style: inset;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  `,
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
})
export class NavigationComponent {}
