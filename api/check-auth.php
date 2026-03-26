<?php
require_once 'security.php';

header("Content-Type: application/json; charset=UTF-8");

if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    echo json_encode(["logged_in" => false]);
    exit;
}

echo json_encode([
    "logged_in" => true,
    "username" => $_SESSION['username'],
    "csrf" => $_SESSION['csrf']
]);
exit;