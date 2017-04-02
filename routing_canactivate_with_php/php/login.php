<?php
//not safe on live server – used on DEV machine with 2servers (angular + xampp)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
//not safe on live server – used on DEV machine with 2servers (angular + xampp)

//https://github.com/rmcdaniel/angular-codeigniter-seed/blob/master/api/application/helpers/jwt_helper.php
require_once 'jwt_helper.php';

if ($_SERVER['REQUEST_METHOD']!= 'POST') {
		echo json_encode(null);
		exit;
}

if (isset($_POST['name']) && isset($_POST['password'])) { // the login.service.ts > loginUser comes here
	// implementation of validation against dbase for user here, after success verification response the JWT token 
	//use wordpress to generate a key :) - https://api.wordpress.org/secret-key/1.1/salt/
	$token = array();
	$token['valid_till'] = strtotime(date("Y-m-d")."UTC +1 days");
	echo JWT::encode($token, ':&`lGv-)+Are%ghAw_5|B/+|IogX^]71yf,{UMiz8ViY+I$R@m}3z]VY<| y|5;b');
}
elseif (isset($_POST['colorSetting'])) { // the login.service.ts > validateUser comes here
	try {
		$token = JWT::decode($_POST['colorSetting'], ':&`lGv-)+Are%ghAw_5|B/+|IogX^]71yf,{UMiz8ViY+I$R@m}3z]VY<| y|5;b');
		echo $token->valid_till;		
	} catch (Exception $e) {
    	header($_SERVER['SERVER_PROTOCOL'] . ' 401 Unauthorized', true, 401);
    	exit;
	}

} else {
    	header($_SERVER['SERVER_PROTOCOL'] . ' 401 Unauthorized', true, 401);
    	exit;	
}
