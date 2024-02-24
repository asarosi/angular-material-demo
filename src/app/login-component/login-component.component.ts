import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'material-dashboard-demo-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIcon,
  ],
})
export class LoginComponentComponent {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });

  onSubmit(): void {
    alert('Thanks!');
  }
}
