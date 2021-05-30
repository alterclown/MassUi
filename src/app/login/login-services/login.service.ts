import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Authentication } from '../models/authentication';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {
  }
  formData: Authentication;
  readonly rootURL = 'https://localhost:44388/api/';

  postLogin(formData) {
    return this.httpClient.post(this.rootURL + 'Authentication/PostLogin', formData);
  }
  postRegistration(formData) {
    return this.httpClient.post(this.rootURL + 'Authentication/PostRegistration', formData);
  }
}
