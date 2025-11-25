import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';
import { Router } from '@angular/router';
import { ToasterComponent } from "../../shared/toaster/toaster.component";
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToasterComponent],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userAuthService: UserAuthService,
    private router: Router,
    private toast: ToastService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onSubmit() {
    if (!this.loginForm.valid) return;

    this.userAuthService.userLogin(this.loginForm.value).subscribe({
      next: (response: any) => {
        this.toast.show(response.message);
        localStorage.setItem('token', response.token);
        this.router.navigate(['admin/dashboard']);
      },
      error: (error) => {
        this.toast.show(error.error);
      }
    });
  }
}
