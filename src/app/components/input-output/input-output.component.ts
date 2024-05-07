import { Component } from '@angular/core';
import { InputComponent } from './input.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [InputComponent],
  template: `
    <app-input
      firstName="Obi-Wan"
      [age]="38"
      last="Kenobi"
      city="coruscant"
    ></app-input>
  `,
  styles: ``,
})
export class InputOutputComponent {}
