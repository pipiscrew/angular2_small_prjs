import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

interface myData {
  success: boolean,
  message: string
}

@Injectable()
export class AuthService {

  private loggedInStatus = false

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

  getUserDetails(username, password) {

    let formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<myData>(this.baseUrl + '/api/auth.php', formData, { withCredentials: true });
  }

}
