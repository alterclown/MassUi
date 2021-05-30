import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  studentForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.submitStudent();
  }

  ngOnInit(): void {
    this.submitStudent();
  }
  submitStudent() {
    this.studentForm = this.fb.group({
    Name: [''],
    Email: ['',Validators.required],
    RegNumber: ['',Validators.required],
    Phone: ['',Validators.required],
    CreatedDate: ['',Validators.required],
    Password: ['',Validators.required],
    ConfirmPassword: ['',Validators.required],
    RememberMe: [true,Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.studentForm.valid) {
      this.studentService.postStudent(this.studentForm.value).subscribe(data => {
        console.log(data);
        window.location.href = "common";
      });
    }
  }
  get studentFormControl() {
    return this.studentForm.controls;
  }
}
