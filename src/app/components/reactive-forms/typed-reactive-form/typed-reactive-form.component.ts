import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';

@Component({
    selector: 'app-typed-reactive-form',
    templateUrl: './typed-reactive-form.component.html',
    styleUrls: ['./typed-reactive-form.component.scss'],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatError,
    ],
})
export class TypedReactiveFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  loginForm = this.fb.group({
    email: ['', { validators: [Validators.required, Validators.email] }],
    password: [
      '',
      { validators: [Validators.required, Validators.minLength(8)] },
    ],
  });

  ngOnInit(): void {}

  login(): void {
    this.loginForm.patchValue({
      email: '10',
      password: '21',
    });
  }
}
