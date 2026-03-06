<?php
// session.php
header("Content-Type: application/json");

// CORS для localhost:3000
$allowedOrigin = "http://localhost:3000";
if (isset($_SERVER['HTTP_ORIGIN']) && $_SERVER['HTTP_ORIGIN'] === $allowedOrigin) {
    header("Access-Control-Allow-Origin: $allowedOrigin");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Start secure session
session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'secure' => false, // true якщо HTTPS
    'httponly' => true,
    'samesite' => 'Strict'
]);
session_start();

// Якщо токен не існує – генеруємо новий
if (!isset($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
}

// Віддаємо токен
echo json_encode([
    "csrf" => $_SESSION['csrf']
]);