# Use angular with PHP server secure calls.

At PHP side :

```php
session_start();

$user = $_SESSION['user'];

if($user != 'admin') {
	die('please login');
	return;
}
```
Is an improved version of [mehulmpt.angular6-youtube](https://github.com/mehulmpt/angular6-youtube/tree/loginapp).<br>
-better file/folder structure<br>
-add `withCredentials` @ HttpHeaders, otherwise `PHPHSession` cookie is not stored when you upload the app online :)<br>
-akveo.ng2-smart-table implementation with server side pagination + `$_SESSION` sample validation<br>
-this guide<br>
<br>
<br>
# Things you should know :<br>
**PRJ\proxy.config.json** - occurred only on localhost (+fix CORS Error) - any call starts with `/api` proxified to XAMPP PHP server (aka localhost) -- always start the debug server with `npm start` (and no ng serve) to execute the predefined -> PRJ\package.json > "start": `ng serve --proxy-config proxy.config.json` otherwise you will not proxified!<br>
<br>
**PRJ\src\environments\environment.ts** - debug (aka `ng serve`) static variable for the baseURL<br>
**PRJ\src\environments\environment.prod.ts** - production (aka `ng build --prod --base-href /subfolder/`) static variable for the baseURL.<br><br>
Files using baseURL : <br>
PRJ\src\app\auth\auth.service.ts<br>
PRJ\src\app\auth\user.service.ts<br><br>
when you `ng build --prod --base-href /subfolder/` automatically uses the environment.prod.ts<br>
<br>
# This project uses the following 3rd-party dependencies :<br>
-[akveo.ng2-smart-table](https://github.com/akveo/ng2-smart-table)<br>
-[oferh.ng2-completer](https://github.com/oferh/ng2-completer) (akveo.ng2-smart-table dependency)<br>
<br>
## How to use it
Clone this repo and run `npm install` to install the required packages.
<br><br><br>
## This project is no longer maintained
<br><br>
Copyright (c) 2019 [PipisCrew](http://pipiscrew.com)
