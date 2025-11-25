import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserAuthService } from '../../services/user-auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userAuthService: UserAuthService,
    private router: Router,
    private toast: ToastService
  ) {
    this.registerForm = this.fb.group({
      name: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get name() {
    return this.registerForm.get('name')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }

  onSubmit() {
    if (!this.registerForm.valid) return;

    this.userAuthService.userSignup(this.registerForm.value).subscribe({
      next: (response: any) => {
        this.toast.show(response.message);
        this.router.navigate(['login']);
      },
      error: (error) => {
        console.log(error.error);
        
        // console.error("Login failed:", error.error.message);
      }
    });
  }
}
