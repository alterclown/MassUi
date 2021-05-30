import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../dialogue/notification.service';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private studentService: StudentService, private notificationService: NotificationService) {
    this.submitStudent();
  }

  ngOnInit(): void {
    this.submitStudent();
  }
  submitStudent() {
    this.studentForm = this.fb.group({
      Name: [''],
      Email: ['', Validators.required],
      RegNumber: ['', Validators.required],
      Phone: ['', Validators.required],
      CreatedDate: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      RememberMe: [true, Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.studentForm.valid) {
      this.studentService.postStudent(this.studentForm.value).subscribe(data => {
        console.log(data);
        window.location.href = "common";
      });
      this.notificationService.warn('Student Registerd successfully');
    }
  }
  get studentFormControl() {
    return this.studentForm.controls;
  }
  logOut() {
    window.location.href = "";
  }

}
