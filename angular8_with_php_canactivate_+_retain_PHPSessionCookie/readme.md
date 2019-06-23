# Use angular with PHP server secure calls

At PHP side :

```php
session_start();

$user = $_SESSION['user'];

if($user != 'admin') {
	die('please login');
	return;
}
```
Is an improved version of [mehulmpt.angular6-youtube](https://github.com/mehulmpt/angular6-youtube/tree/loginapp) :



-better file/folder structure
-add `withCredentials` @ HttpHeaders, otherwise `PHPSession` cookie is not [stored](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials) when you upload the app online :)<br>
-akveo.ng2-smart-table implementation with server side pagination + `$_SESSION` sample validation<br>
-`auth.service.ts` uses `FormData` as result at the destination `auth.php` there is no need to `file_get_contents('php://input')` :)<br>
-this guide<br>
<br>
<br>
# Things you should know :<br>
**PRJ\proxy.config.json** - occurred only on localhost (+fix CORS Error) - any call starts with `/api` proxified to XAMPP PHP server (aka localhost) -- always start the debug server with `npm start` (and no ng serve) to execute the predefined -> PRJ\package.json > "start": `ng serve --proxy-config proxy.config.json` otherwise you will not proxified!<br>
<br>
**PRJ\src\environments\environment.ts** - debug (aka `ng serve`) static variable for the baseURL<br>
**PRJ\src\environments\environment.prod.ts** - production (aka `ng build --prod --base-href /subfolder/`) static variable for the baseURL.<br><br>
files using baseURL : <br>
PRJ\src\app\auth\auth.service.ts<br>
PRJ\src\app\auth\user.service.ts<br><br>
when you `ng build --prod --base-href /subfolder/` automatically uses the environment.prod.ts<br>
<br>
[A guide to ng2-smart-table](https://www.pipiscrew.com/2019/06/from-wenzhixin-bootstrap-table-to-angular-akveo-ng2-smart-table/)<br>
[CanActivate vs CanActivateChild](https://stackoverflow.com/a/40284274)
<br/>
<br/>
# Things you should know about CORS and XHR :





All the `api/php` files start with :




```php
header("Access-Control-Allow-Origin: https://www.pipiscrew.com ");
header("Access-Control-Allow-Credentials: true");
```

<br/>
<br/>


**1** as we mentioned at angular we using `withCredentials` at HttpHeaders. This requires as https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS site writes :


> When responding to a credentialed request, the server must specify an origin in the value of the Access-Control-Allow-Origin header, instead of specifying the "*" wildcard.

<br/>
<br/>

**2** When you login to angular application, if you go to find the `PHPSession cookie` at developer console cookie manager, you will see an empty list!<br>

![shot1](https://user-images.githubusercontent.com/3852762/59976247-37d58180-95b1-11e9-8d5a-74c90daef95c.png)
<br>
this is because all XHR with CORS store the cookie to browser **internal cookie store**.  

[ref2011](https://stackoverflow.com/a/7189502/1320686)    [ref2013](https://github.com/mgonto/restangular/issues/243#issuecomment-22711777) 

<br/>
<br/>

> Setting withCredentials has no effect on same-site requests.

> In addition, this flag is #also used# to indicate when cookies are to be ignored in the response. The default is false.

> The third-party cookies obtained by setting withCredentials to true will still honor same-origin policy and hence can not be accessed by the requesting script through #document.cookie# or from response headers.

[ref - XMLHttpRequest/withCredentials](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials)

<br>
<br>
you can find the cookie at :


```php
chrome://settings/cookies/detail?site=pipiscrew.com
```



or using [Awesome Cookie Manager](https://chrome.google.com/webstore/detail/awesome-cookie-manager/hcpidejphgpcgfnpiehkcckkkemgneif)
<br>

![snap240](https://user-images.githubusercontent.com/3852762/59976900-352b5a00-95ba-11e9-8415-8da459f093b1.png)



refs:

[Access-Control-Allow-Origin
](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)

[Access-Control-Allow-Credentials](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials)

<br/>
<br/>


# PHP Session expiration setup

The configuration primarly should be done on php.ini, we can use `ini_set` function to set it on runtime.

```php
<?php

//prior v7
//https://stackoverflow.com/a/24350918/1320686

ini_set('session.cookie_lifetime', 86400);
ini_set('session.gc_maxlifetime', 86400);

sesion_start(); //https://www.php.net/manual/en/function.session-start.php


//v7 and later
//https://stackoverflow.com/a/53485125/1320686
session_start([
    'cookie_lifetime' => 86400,
    'gc_maxlifetime' => 86400
]);
```



86400 = represents 24h, value is in seconds.

[session.cookie_lifetime](https://www.php.net/manual/en/session.configuration.php#ini.session.cookie-lifetime) specifies the lifetime of the cookie in seconds which is sent to the browser.


[session.gc_maxlifetime](https://www.php.net/manual/en/session.configuration.php#ini.session.gc-maxlifetime) specifies the number of seconds after which data will be seen as 'garbage' and potentially cleaned up. Garbage collection may occur during session start


<br/>
<br/>



# This project uses the following 3rd-party dependencies :<br>
-[akveo.ng2-smart-table](https://github.com/akveo/ng2-smart-table)<br>
-[oferh.ng2-completer](https://github.com/oferh/ng2-completer) (akveo.ng2-smart-table dependency)<br>


<br/>
<br/>

# How to use it
Clone this repo and run `npm install` to install the required packages.

<br/>

# This project is no longer maintained
Copyright (c) 2019  [PipisCrew](http://pipiscrew.com)

