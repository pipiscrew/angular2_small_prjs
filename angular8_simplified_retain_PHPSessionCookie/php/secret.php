<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials: true");

@session_start();

if(isset($_SESSION['user'])) {
    $secret = "Proteins are made up of hundreds of smaller units called amino acids."; 
} else {
    $secret = "Please login to see the secret!"; 
}

echo json_encode(array("secret" => $secret));