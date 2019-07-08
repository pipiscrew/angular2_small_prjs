import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;
  serverError: string;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    var user = this.loginForm.get('username').value;
    var pass = this.loginForm.get('password').value;


    var _this = this;

    this.tryLoginUser(user, pass).subscribe(function (x) {

      if (!x.success) {
        _this.serverError = x.message;
        return;
      } else {
        _this.serverError = "";
        alert("you have successfully logged in!");
      }

    }, function (error) {

      _this.serverError = error.message;

    });
  }

  // convenience getter for easy access to form fields - https://jasonwatmore.com/post/2019/06/14/angular-8-reactive-forms-validation-example
  get f() { return this.loginForm.controls; }


  btnCheck() {

    this.isLoggedIn().subscribe(data => {
      alert(JSON.stringify(data));
    })

  }

  btnSecret() {

    this.getSecret().subscribe(function(data) {
      alert(JSON.stringify(data));
    })

  }

  btnLogout() {
    this.logout().subscribe(function(data) {
      alert(JSON.stringify(data));
    })
  }


  tryLoginUser(username, password) : Observable<userCallback> {

    let formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post<userCallback>('http://localhost/api/auth.php', formData, { withCredentials: true });
  }


  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://localhost/api/isloggedin.php', { withCredentials: true })
  }

  getSecret(): Observable<secretCallback> {
    return this.http.get<secretCallback>('http://localhost/api/secret.php', { withCredentials: true })
  }

  logout(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://localhost/api/logout.php', { withCredentials: true })
  }
  
}

interface userCallback {
  success: boolean,
  message: string
}

interface isLoggedIn {
  status: boolean
}

interface secretCallback {
  success: boolean,
  message: string
}
