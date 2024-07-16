import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-typed-reactive-form',
  templateUrl: './typed-reactive-form.component.html',
  styleUrls: ['./typed-reactive-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatError],
})
export class TypedReactiveFormComponent {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: ['', { validators: [Validators.required, Validators.email] }],
    password: [
      '',
      { validators: [Validators.required, Validators.minLength(8)] },
    ],
  });

  login(): void {
    this.loginForm.patchValue({
      email: '10',
      password: '21',
    });
  }
}
