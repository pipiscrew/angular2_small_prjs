import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
	
	constructor (private http: Http) {}
	
	public loginUser(d:any) {
	
		let body = new URLSearchParams();
		body.set('name', d.umail);
		body.set('password', d.upassword);
		
		return this.http.post("http://localhost/login.php", body);
	  }
	  
	public validateUser() : Observable<boolean> {
	
		let body = new URLSearchParams();
		body.set('colorSetting', localStorage.getItem('colorSetting'));
	
		return this.http.post("http://localhost/login.php", body)
			.map(() => true).catch(() => {
			// this is executed on a 401 or on any error
			return Observable.of(false);
		});
	}

}
