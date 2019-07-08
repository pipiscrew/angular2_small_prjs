<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials: true");

@session_start();

if(isset($_SESSION['user'])) {
    $status = true;
} else {
    $status = false;
}

echo json_encode(array("status" => $status));