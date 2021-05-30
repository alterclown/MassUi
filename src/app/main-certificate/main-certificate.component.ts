import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-certificate',
  templateUrl: './main-certificate.component.html',
  styleUrls: ['./main-certificate.component.css']
})
export class MainCertificateComponent implements OnInit {
  title = "Main Certificate List";
  constructor() { }

  ngOnInit(): void {
  }
  logOut() {
    window.location.href = "";
  }
}
