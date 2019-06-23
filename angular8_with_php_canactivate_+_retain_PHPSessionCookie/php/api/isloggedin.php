<?php

header("Access-Control-Allow-Origin: https://www.pipiscrew.com ");
header("Access-Control-Allow-Credentials: true");


session_start();

if(isset($_SESSION['user'])) {
    echo '{"status": true}';
} else {
    echo '{"status": false}';
}