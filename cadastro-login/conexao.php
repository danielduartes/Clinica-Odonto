<?php
$host = "localhost";
$user = "root";
$pass = "";
$db = "clinica";

$con = new mysqli($host, $user, $pass, $db);

if($con->connect_error){
    die("Falha na conexão: " . $con->connect_error);
}
?>