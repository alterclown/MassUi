import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { StudentRegistration } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private httpClient: HttpClient) {
  }
  formData: StudentRegistration;
  readonly rootURL = 'https://localhost:44388/api/';

  postStudent(formData) {
    return this.httpClient.post(this.rootURL + 'Student/PostStudentRegistration', formData);
  }
  putStudent(StudentId,data) {
    return this.httpClient.put(this.rootURL + 'Student/PutStudentRegistration/'+ StudentId,data);
  }
  deleteStudent(StudentId: number) {
    return this.httpClient.delete(this.rootURL +'Student/DeleteById/'+ StudentId);
  }

  getStudent(){
    return this.httpClient.get(this.rootURL + 'Student/GetStudentRegistrationList');
  }
  getStudentId(StudentId) {
    return this.httpClient.get(this.rootURL +'Student/GetStudentRegistrationById/'+ StudentId);
  }
}
