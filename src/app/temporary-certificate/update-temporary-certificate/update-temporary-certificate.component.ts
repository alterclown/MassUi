import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/dialogue/notification.service';
import { TemporaryCertificateService } from '../services/temporary.service';

@Component({
  selector: 'app-update-temporary-certificate',
  templateUrl: './update-temporary-certificate.component.html',
  styleUrls: ['./update-temporary-certificate.component.css']
})
export class UpdateTemporaryCertificateComponent implements OnInit {

  tempCertificateForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private tempService: TemporaryCertificateService, private _router: Router, private _avRoute: ActivatedRoute, private notificationService: NotificationService) {
    this.submitTemporaryCertificate();
  }

  ngOnInit(): void {
    this.submitTemporaryCertificate();
    this.getTemporaryCertificateId();
  }
  submitTemporaryCertificate() {
    this.tempCertificateForm = this.fb.group({
      RegNumber: ['', Validators.required],
      Name: ['', Validators.required],
      FathersName: ['', Validators.required],
      Address: ['', Validators.required],
      Mobile: ['', Validators.required],
      Email: ['', Validators.required],
      ApplyDate: ['', Validators.required],
      TranIt: ['', Validators.required],
      Status: ['', Validators.required],
    });
  }
  onUpdate() {
    this.submitted = true;
    if (this.tempCertificateForm.valid) {
      this.tempService.putTemporaryCertificate(this._avRoute.snapshot.params.id, this.tempCertificateForm.value).subscribe(data => {
        console.log(data);
      });
      this.notificationService.warn('Updated successfully');
    }
  }
  getTemporaryCertificateId() {
    this.tempService.getTemporaryCertificateId(this._avRoute.snapshot.params.id).subscribe(data => {
      this.tempCertificateForm = this.fb.group({
        TemporaryCertificateId: (data['temporaryCertificateId']),
        RegNumber: (data['regNumber']),
        Name: (data['name']),
        FathersName: (data['fathersName']),
        Address: (data['address']),
        Mobile: (data['mobile']),
        Email: (data['email']),
        ApplyDate: (data['applyDate']),
        TranIt: (data['tranIt']),
        Status: (data['status']),
      });
    });
  }
  get tempCertificateFormControl() {
    return this.tempCertificateForm.controls;
  }
  logOut() {
    window.location.href = "";
  }

}
