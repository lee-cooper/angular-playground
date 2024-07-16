import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  template: `<mat-toolbar class="bg-emerald-700">
    <button
      mat-icon-button
      class="example-icon"
      aria-label="Example icon-button with menu icon"
    >
      <mat-icon>menu</mat-icon>
    </button>
    <span>Angular Playground</span>
    <span class="example-spacer"></span>
    <button mat-icon-button class="example-icon" aria-label="Code button">
      <mat-icon>code</mat-icon>
    </button>
  </mat-toolbar>`,
  styles: `
    .example-spacer {
      flex: 1 1 auto;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
