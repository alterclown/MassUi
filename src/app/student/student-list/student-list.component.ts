import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  _studentList:any;
  constructor(private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.studentService.getStudent().subscribe(data => {
      this._studentList = data;
    });
  }
  deleteStudent(studentId: number) {
    this.studentService.deleteStudent(studentId).subscribe(() => {
      console.log('Deleted!');
    });
    this._studentList.splice(0, 1);
  }
}
