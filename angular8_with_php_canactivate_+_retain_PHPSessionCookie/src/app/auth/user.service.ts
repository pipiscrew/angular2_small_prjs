import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from 'src/environments/environment';

interface myData {
  message: string,
  success: boolean
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable()
export class UserService {

  private baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getSomeData() {
    return this.http.get<myData>(this.baseUrl + '/api/database.php', { withCredentials: true })
  }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>(this.baseUrl + '/api/isloggedin.php', { withCredentials: true })
  }

  logout() {
    return this.http.get<logoutStatus>(this.baseUrl + '/api/logout.php', { withCredentials: true })
  }

}
