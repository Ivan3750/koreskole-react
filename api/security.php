<?php
header("Content-Type: application/json; charset=UTF-8");

session_set_cookie_params([
    'lifetime' => 0,
    'path'     => '/',
    'secure'   => false,
    'httponly' => true,
    'samesite' => 'Lax'
]);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['created'])) {
    $_SESSION['created'] = time();
    $_SESSION['ip']      = $_SERVER['REMOTE_ADDR'];
    $_SESSION['ua']      = $_SERVER['HTTP_USER_AGENT'];
}

if (
    isset($_SESSION['ip'], $_SESSION['ua']) &&
    ($_SESSION['ip'] !== $_SERVER['REMOTE_ADDR'] ||
     $_SESSION['ua'] !== $_SERVER['HTTP_USER_AGENT'])
) {
    session_destroy();
    http_response_code(403);
    echo json_encode(["error" => "Session invalid"]);
    exit;
}

if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
}

function verify_csrf() {
    $headers = getallheaders();
    $csrf    = $headers['X-Csrf-Token'] ?? $headers['X-CSRF-TOKEN'] ?? '';
    if (!$csrf || !hash_equals($_SESSION['csrf'], $csrf)) {
        http_response_code(403);
        echo json_encode(["error" => "Invalid CSRF"]);
        exit;
    }
}