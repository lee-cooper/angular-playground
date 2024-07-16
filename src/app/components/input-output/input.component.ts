import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  template: `<section>
    <h2>Input Example</h2>
    <p>First Name: {{ firstName }}</p>
    <p>Last Name: {{ lastName }}</p>
    <p>Age: {{ age }}</p>
    <p>City: {{ city }}</p>
  </section>`,
  styles: ``,
})
export class InputComponent {
  @Input() firstName!: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input({ alias: 'last' }) lastName!: string;
  @Input({ required: true }) age!: number;
  @Input({ transform: (value: string) => value.toUpperCase() }) city!: string;
}
