import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { NotificationService } from 'src/app/dialogue/notification.service';
import { MainCertificateService } from '../services/main-certificate.service';

@Component({
  selector: 'app-create-main-certificate',
  templateUrl: './create-main-certificate.component.html',
  styleUrls: ['./create-main-certificate.component.css']
})
export class CreateMainCertificateComponent implements OnInit {

  mainCertificateForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private mainCertificateService: MainCertificateService, private notificationService: NotificationService) {
    this.submitMainCertificate();
  }

  ngOnInit(): void {
    this.submitMainCertificate();
  }
  submitMainCertificate() {
    this.mainCertificateForm = this.fb.group({
      RegNumber: ['',Validators.required],
      Name: ['',Validators.required],
      FathersName: ['',Validators.required],
      Session: ['',Validators.required],
      Program: ['',Validators.required],
      CGPA: ['',Validators.required],
      Address: ['',Validators.required],
      Mobile: ['',Validators.required],
      Email: ['',Validators.required],
      ApplyDate: ['',Validators.required],
      TranIt: ['',Validators.required],
      Status: ['',Validators.required]
    });
  }
  onSubmit() {
    this.submitted = true;
    if (this.mainCertificateForm.valid) {
      this.mainCertificateService.postMainCertificate(this.mainCertificateForm.value).subscribe(data => {
        console.log(data);
      });
      this.notificationService.warn('Inserted successfully');
    }
  }  
  get mainCertificateFormControl() {
    return this.mainCertificateForm.controls;
  }
  logOut() {
    window.location.href = "";
  }
}
