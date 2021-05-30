import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { NotificationService } from '../dialogue/notification.service';
import { AuthenticationService } from './login-services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private authenticationService:AuthenticationService,private router:Router, private notificationService: NotificationService) {
    this.submitlogin();
  }

  ngOnInit(): void {
    this.submitlogin();
  }
  submitlogin() {
    this.loginForm = this.fb.group({
    Email: ['',Validators.required],
    Password: ['',Validators.required],
    ConfirmPassword: ['',Validators.required],
    RememberMe: [true,Validators.required]
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return alert('Invalid Form');
    }
    if (this.loginForm.valid) {
      this.authenticationService.postLogin(this.loginForm.value).subscribe(data => {
        console.log(data);
        window.location.href = "common";
      });
      this.notificationService.warn('Logged In successfully');
    }
  }
  get loginFormControl() {
    return this.loginForm.controls;
  }

}
