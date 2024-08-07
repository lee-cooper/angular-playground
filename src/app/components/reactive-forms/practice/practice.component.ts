import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import {
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatIcon,
    MatPrefix,
    MatInput,
    MatError,
    MatButton,
    JsonPipe,
  ],
})
export class PracticeComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  login(): void {
    if (this.loginForm.invalid) return;

    console.log(this.loginForm.value);
  }
}
