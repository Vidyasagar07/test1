import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../environment';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, NgModel, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hr-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule,FormsModule,CommonModule,HttpClientModule],
  templateUrl: './hr-register.component.html',
  styleUrl: './hr-register.component.css'
})
export class HrRegisterComponent {
  fullName: string = '';
  mail: string = '';
  password: string = '';
  errorMessage: string = '';
  registrationForm!: FormGroup;
registrationStatus: any;
  cdr: any;
  successPopover: any;  
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;

  




  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, this.fullNameValidator]],
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), this.passwordValidator]],
      confirmPassword: ['', Validators.required],
    }, { validator: this.passwordMatchValidator }); // Add the passwordMatchValidator as a validator for the entire form
  }

  // Custom validator for full name
  fullNameValidator(control: AbstractControl): ValidationErrors | null {
    const fullNameRegex = /^[a-zA-Z\s']+$/; // Updated regex to disallow dots and hyphens
  
    const isValidLength = control.value.length >= 5 && control.value.length <= 30;
  
    return fullNameRegex.test(control.value) && isValidLength ? null : { invalidFullName: true };
  }

  // Custom validator for password
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(control.value) ? null : { invalidPassword: true };
  }
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value ? null : { passwordMismatch: true };
  }

  register(): void {
    if (this.registrationForm.valid) {
      const registrationData = this.registrationForm.value;
      const baseUrl = environment.apiBaseUrl;

      this.http.post(`${baseUrl}/user/register`, registrationData)
        .subscribe({
          next: (response: any) => {
            this.registrationStatus = 'success';
            this.errorMessage = '';
            this.login(registrationData.mail, registrationData.password);
          },
          error: (error: HttpErrorResponse) => {
            if (error.status === 409) {
              this.registrationStatus = 'conflict';
            } else {
              this.errorMessage = 'Registration failed. Please try again.';
            }
          }
        });
    }
  }

  login(email: string, password: string): void {
    const baseUrl = environment.apiBaseUrl;
    const data = { mail: email, password: password };

    this.http.post(`${baseUrl}/login/log`, data)
      .subscribe({
        next: (response: any) => {
          this.router.navigate(['/home']);
        },
        error: (loginError: HttpErrorResponse) => {
          console.error('Login after registration failed:', loginError);
        }
      });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}