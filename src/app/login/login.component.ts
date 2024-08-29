import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { TokenStorageService } from '../auth/services/token-storage.service';
import { GeneralResponse } from '../interfaces/auth.response.model';
import { ToastModule } from 'primeng/toast';
import { ToastService } from '../basic/services/toast.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink,ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 

  fb = inject(FormBuilder);
  authService = inject(AuthService);
   tokenStorage= inject(TokenStorageService);
   toastService = inject(ToastService);
  router = inject(Router);
  error = false;



  
  loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  submit() {
    this.authService.login(this.loginForm.value)
      .subscribe({
        next: (response:GeneralResponse) => {
        console.log('response', response);
        this.error = false;
        this.tokenStorage.saveToken(response.body.token.access);
       
        this.router.navigateByUrl('/');
        },
        error: () => {
          this.toastService.send({
            severity: "error", summary: "Failed", detail: "Failed logging in.",
          });
          this.error = true;
        },
      })
  }
}
