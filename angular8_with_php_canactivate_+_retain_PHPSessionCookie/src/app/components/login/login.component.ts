import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value

    this.Auth.getUserDetails(username, password).subscribe(data => {
      if(data.success) {
        
        let redirect = this.route.snapshot.queryParamMap.get('redirect');
        
        if (redirect==null)
          redirect = 'admin';

        this.router.navigate([redirect]);

        this.Auth.setLoggedIn(true)

      } else {
        window.alert(data.message)
      }
    })
    console.log(username, password)
  }

}
