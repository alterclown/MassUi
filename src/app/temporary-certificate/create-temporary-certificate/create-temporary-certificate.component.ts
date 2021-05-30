import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/dialogue/notification.service';
import { TemporaryCertificateService } from '../services/temporary.service';

@Component({
  selector: 'app-create-temporary-certificate',
  templateUrl: './create-temporary-certificate.component.html',
  styleUrls: ['./create-temporary-certificate.component.css']
})
export class CreateTemporaryCertificateComponent implements OnInit {

  tempCertificateForm: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private tempService: TemporaryCertificateService,private notificationService: NotificationService) {
    this.submitTemporaryCertificate();
  }

  ngOnInit(): void {
    this.submitTemporaryCertificate();
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
  onSubmit() {
    this.submitted = true;
    if (this.tempCertificateForm.valid) {
      this.tempService.postTemporaryCertificate(this.tempCertificateForm.value).subscribe(data => {
        console.log(data);
        this.notificationService.warn('Created successfully');
      });
    }
  }
  get tempCertificateFormControl() {
    return this.tempCertificateForm.controls;
  }
  logOut() {
    window.location.href = "";
  }
}
