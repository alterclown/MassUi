import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { TemporaryCertificate } from '../models/temporary';

@Injectable({
  providedIn: 'root'
})
export class TemporaryCertificateService {
  constructor(private httpClient: HttpClient) {
  }
  formData: TemporaryCertificate;
  readonly rootURL = 'https://localhost:44388/api/';

  postTemporaryCertificate(formData) {
    return this.httpClient.post(this.rootURL + 'TemporaryCertificate/PostTemporaryCertificate', formData);
  }
  putTemporaryCertificate(TemporaryCertificateId,data) {
    return this.httpClient.put(this.rootURL + 'TemporaryCertificate/PutTemporaryCertificate/'+ TemporaryCertificateId,data);
  }
  deleteTemporaryCertificate(TemporaryCertificateId: number) {
    return this.httpClient.delete(this.rootURL +'TemporaryCertificate/DeleteById/'+ TemporaryCertificateId);
  }

  getTemporaryCertificate(){
    return this.httpClient.get(this.rootURL + 'TemporaryCertificate/GetTemporaryCertificateList');
  }
  getTemporaryCertificateId(TemporaryCertificateId) {
    return this.httpClient.get(this.rootURL +'TemporaryCertificate/GetTemporaryCertificateById/'+ TemporaryCertificateId);
  }
}
