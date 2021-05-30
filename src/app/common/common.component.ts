import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../login/login-services/auth.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  title = "Mass Data";
  isLoggedIn: boolean;
  @Input() public isUserLoggedIn: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  logOut() {
    window.location.href = "";
  }
}
