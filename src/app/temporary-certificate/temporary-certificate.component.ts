import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temporary-certificate',
  templateUrl: './temporary-certificate.component.html',
  styleUrls: ['./temporary-certificate.component.css']
})
export class TemporaryCertificateComponent implements OnInit {
  title="Temporary Certificate List";
  constructor() { }

  ngOnInit(): void {
  }
  logOut() {
    window.location.href = "";
  }
}
