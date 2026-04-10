<?php

$host = "mysql-3a362249-reelsstudio34-356c.c.aivencloud.com";
$port = 23785;
$db   = "defaultdb";
$user = "avnadmin";
$pass = "AVNS__jQmmRbYAAxo7y3OIpv";
$ca = __DIR__ . "/ca.pem";
 

try {
    $dsn = "mysql:host=$host;port=$port;dbname=$db;charset=utf8mb4";

    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::MYSQL_ATTR_SSL_CA => $ca,
    ];

    $pdo = new PDO($dsn, $user, $pass, $options);

} catch (PDOException $e) {
    die("Connection failed: " . $e->getMessage());
}
?>