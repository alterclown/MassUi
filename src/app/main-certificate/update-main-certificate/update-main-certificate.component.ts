import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/dialogue/notification.service';
import { MainCertificateService } from '../services/main-certificate.service';

@Component({
  selector: 'app-update-main-certificate',
  templateUrl: './update-main-certificate.component.html',
  styleUrls: ['./update-main-certificate.component.css']
})
export class UpdateMainCertificateComponent implements OnInit {

  mainCertificateForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private mainCertificateService: MainCertificateService, private _router: Router, private _avRoute: ActivatedRoute, private notificationService: NotificationService) {
    this.submitMainCertificate();
  }

  ngOnInit(): void {
    this.submitMainCertificate();
    this.getMainCertificateId();
  }
  submitMainCertificate() {
    this.mainCertificateForm = this.fb.group({
      //MainCertificateId: [''],
      RegNumber: ['',Validators.required],
      Name: ['',Validators.required],
      FathersName: ['',Validators.required],
      Session: ['',Validators.required],
      Program: ['',Validators.required],
      CGPA: ['',Validators.required],
      Address: ['',Validators.required],
      Mobile: ['',Validators.required],
      Email: ['',Validators.required, Validators.email],
      ApplyDate: ['',Validators.required],
      TranIt: ['',Validators.required],
      Status: ['',Validators.required]
    });
  }
  onUpdate() {
    this.submitted = true;
    if (this.mainCertificateForm.valid) {
      this.mainCertificateService.putMainCertificate(this._avRoute.snapshot.params.id, this.mainCertificateForm.value).subscribe(data => {
        console.log(data);
      });
      this.notificationService.warn('Updated successfully');
    }
  }
  getMainCertificateId() {
    this.mainCertificateService.getMainCertificateId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.mainCertificateForm = this.fb.group({
        MainCertificateId: (data['mainCertificateId']),
        RegNumber: (data['regNumber']),
        Name: (data['name']),
        FathersName: (data['fathersName']),
        Session: (data['session']),
        Program: (data['program']),
        CGPA: (data['cgpa']),
        Address: (data['address']),
        Mobile: (data['mobile']),
        Email: (data['email']),
        ApplyDate: (data['applyDate']),
        TranIt: (data['tranIt']),
        Status: (data['status']),
      });
    });
  }
  get mainCertificateFormControl() {
    return this.mainCertificateForm.controls;
  }
  logOut() {
    window.location.href = "";
  }

}
