import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/dialogue/notification.service';
import { AuthenticationService } from '../login-services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  _roleList: any = [
    { RoleId: 1, RoleName: 'Admin' },
    { RoleId: 1, RoleName: 'Teacher' },
    { RoleId: 1, RoleName: 'Student' }
  ];
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private notificationService: NotificationService) {
    this.submitregister();
  }

  ngOnInit(): void {
    this.submitregister();
  }
  submitregister() {
    this.registerForm = this.fb.group({
      FirstName: [''],
      LastName: ['', Validators.required],
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      IsAdmin: [true, Validators.required],
      RememberMe: [true, Validators.required]
    });
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      return alert('Invalid Form');
    }
    if (this.registerForm.valid) {
      this.authenticationService.postRegistration(this.registerForm.value).subscribe(data => {
        console.log(data);
      });
      this.notificationService.warn('New User Registerd successfully');
    }
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }

}
