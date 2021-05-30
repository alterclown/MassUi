import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  studentForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private studentService: StudentService, private _router: Router, private _avRoute: ActivatedRoute) {
    this.submitStudent();
  }

  ngOnInit(): void {
    this.submitStudent();
    this.getStudentId();
  }
  submitStudent() {
    this.studentForm = this.fb.group({
      StudentId: [''],
      Email: ['', Validators.required],
      RegNumber: ['', Validators.required],
      Phone: ['', Validators.required],
      CreatedDate: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }
  onUpdate() {
    this.submitted = true;
    if (this.studentForm.valid) {
      this.studentService.putStudent(this._avRoute.snapshot.params.id, this.studentForm.value).subscribe(data => {
        console.log(data);
      });
    }
  }
  getStudentId() {
    this.studentService.getStudentId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.studentForm = this.fb.group({
        StudentId: (data['studentId']),
        Name: (data['name']),
        Email: (data['email']),
        RegNumber: (data['regNumber']),
        Phone: (data['phone']),
        CreatedDate: (data['createdDate']),
        Password: (data['password']),
      });
    });
  }
  get studentFormControl() {
    return this.studentForm.controls;
  }
}
