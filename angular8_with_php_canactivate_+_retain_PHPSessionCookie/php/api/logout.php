<?php

header("Access-Control-Allow-Origin: https://www.pipiscrew.com ");
header("Access-Control-Allow-Credentials: true");


session_start();

unset($_SESSION);

session_destroy();

?>
{
    "success": true
}