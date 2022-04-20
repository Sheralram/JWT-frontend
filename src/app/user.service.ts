import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  generateToken(credentials: any) {
    return this.http.post(this.baseUrl + "/token", credentials)
  }

  loginUser(token: any) {
    localStorage.setItem("token", token)
    this.getUserByToken().subscribe((n: any) => {
      // localStorage.setItem("userId", n.data.id.toString());
      localStorage.setItem("userName", n.data.fullName);
    })
    return true
  }
  getUserByToken() {
    let token = localStorage.getItem("token")
    return this.http.get<any>(this.baseUrl  + token)
  }

  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == null || token === "") {
      return false;
    } else {
      return true;
    }
  }

}
