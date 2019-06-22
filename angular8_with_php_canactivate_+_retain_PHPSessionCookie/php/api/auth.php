<?php


/*
header("Access-Control-Allow-Origin: *");
header("Access-Control-Request-Headers: GET,POST,OPTIONS,DELETE,PUT");
header('Access-Control-Allow-Headers: Accept,Accept-Language,Content-Language,Content-Type');

*/

session_start();


//$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST)) {
  $username = $_POST['username'];
  $password = $_POST['password'];

  if($username == 'admin' && $password == 'admin') {
    $_SESSION['user'] = 'admin';
    ?>
{
  "success": true,
  "secret": "This is the secret no one knows but the admin"
}
    <?php
  } else {
    ?>
{
  "success": false,
  "message": "Invalid credentials"
}
    <?php
  }
} else {
  //var_dump($_POST)
  ?>
{
  "success": false,
  "message": "Only POST access accepted"
}
  <?php
}

?>