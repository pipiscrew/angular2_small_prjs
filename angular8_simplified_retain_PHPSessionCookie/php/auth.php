<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials: true");

@session_start();

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
	die("accept only POST");
}

if ( !isset($_POST["username"]) || !isset($_POST["password"]) ) {
	die("no valid object parameters");
}


if ($_POST["username"] == "admin" && $_POST["password"] == "admin") {
	
	$_SESSION['user'] = 'admin';
	
	echo json_encode(array("success" => true, "message" => "this is a registered message"));
	
} else {
	echo json_encode(array("success" => false, "message" => "invalid login"));
	return;
}
