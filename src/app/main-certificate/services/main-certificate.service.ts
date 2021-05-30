import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MainCertificate } from '../models/mainCertificate';

@Injectable({
  providedIn: 'root'
})
export class MainCertificateService {
  constructor(private httpClient: HttpClient) {
  }
  formData: MainCertificate;
  readonly rootURL = 'https://localhost:44388/api/';

  postMainCertificate(formData) {
    return this.httpClient.post(this.rootURL + 'MainCertificate/PostMainCertificate', formData);
  }
  putMainCertificate(MainCertificateId,data) {
    return this.httpClient.put(this.rootURL + 'MainCertificate/PutMainCertificate/'+ MainCertificateId,data);
  }
  deleteMainCertificate(MainCertificateId: number) {
    return this.httpClient.delete(this.rootURL +'MainCertificate/DeleteById/'+ MainCertificateId);
  }

  getMainCertificate(){
    return this.httpClient.get(this.rootURL + 'MainCertificate/GetMainCertificateList');
  }
  getMainCertificateId(MainCertificateId) {
    return this.httpClient.get(this.rootURL +'MainCertificate/GetMainCertificateById/'+ MainCertificateId);
  }
}
