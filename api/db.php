<?php

$host = "mysql14.unoeuro.com"; 
$port = 3306; 
$db   = "loenbaeks_dk_db";
$user = "loenbaeks_dk"; 
$pass = "9cfwBeFbaHtdm6pgRyGD"; 
$ca = __DIR__ . "/ca.pem";
 

try {
    $dsn = "mysql:host=$host;port=$port;dbname=$db;charset=utf8mb4";

    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ];

    $pdo = new PDO($dsn, $user, $pass, $options);

} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>