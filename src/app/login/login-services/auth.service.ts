import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  username: string = null

  constructor() { }

  setUsernameInSession(username :string) {
        sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME , username)
        this.username = username
  }

  isLoggedIn() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    return !(user == null)
  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
  }

}
