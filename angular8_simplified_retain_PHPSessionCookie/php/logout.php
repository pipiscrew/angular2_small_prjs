<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials: true");

@session_start();

unset($_SESSION);

session_destroy();

echo json_encode(array("status" => true));
