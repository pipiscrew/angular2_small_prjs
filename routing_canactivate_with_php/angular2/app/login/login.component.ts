import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]

})

export class LoginComponent {
  message: string;
  constructor(public router: Router, private loginService: LoginService) {}
  
  tryLogin(form_data: any){
        this.loginService.loginUser(form_data).subscribe((data) => {
															console.log(data['_body']);
															
															//verification for returned data
															if (data!=null && data['_body'])
															{	
																localStorage.colorSetting = data['_body']; //store it to local storage
																this.router.navigate(['']) //navigate to home
															}
														},
														(err) => console.log("error occured", err));

    console.log(form_data);
    
  }

}