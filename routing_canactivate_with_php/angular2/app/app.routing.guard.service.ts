import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';
import { LoginService } from './login/login.service';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {
  
  constructor(private loginService: LoginService, private router: Router) {}

  //http://stackoverflow.com/a/39689466/1320686
  //https://github.com/angular/angular/issues/9613#issuecomment-228748731
  //--
  //http://stackoverflow.com/a/42702098/1320686
  canActivate(): Observable<boolean> {
	  return this.loginService.validateUser().map(authState => {
		if (!authState) this.router.navigate(['/login']);
		return authState;
	  });
  

  } 

}