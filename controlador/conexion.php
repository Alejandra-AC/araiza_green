<?php

$servername = "192.9.203.55";
$username   = "araizasi_supp";
$password   = "MXL1702";
$agreen     = "araiza_green";
$adiamante  = "diamond_club_diamante";
$splataa    = "araizasi_plataa";

// Datos para conexion a plataa  
$servername_p = "araizasistemas.com";
$username_p   = "araizasi";
$password_p   = "cBqg9G.FZmm@";

$green    = new mysqli($servername, $username, $password, $agreen);

$diamante = new mysqli($servername, $username, $password, $adiamante);

$plataa   = new mysqli($servername_p, $username_p, $password_p, $splataa);

mysqli_set_charset($green, "utf8"); 
mysqli_set_charset($diamante, "utf8"); 
mysqli_set_charset($plataa, "utf8"); 

if ($green->connect_error) {
    die("Connection failed: " . $green->connect_error);
}
if ($diamante->connect_error) {
    die("Connection failed: " . $diamante->connect_error);
}
if ($plataa->connect_error) {
    die("Connection failed: " . $plataa->connect_error);
}