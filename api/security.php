<?php
header("Content-Type: application/json; charset=UTF-8");
header("X-Content-Type-Options: nosniff");
header("Cache-Control: no-store, no-cache, must-revalidate");
header("Pragma: no-cache");

session_set_cookie_params([
    'lifetime' => 0,
    'path'     => '/',
    'domain'   => '',
    'secure'   => true,
    'httponly' => true,
    'samesite' => 'Lax'
]);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (!isset($_SESSION['created'])) {
    $_SESSION['created'] = time();
}

if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
}

function verify_csrf() {
    $token = null;
    
    if (function_exists('getallheaders')) {
        $headers = getallheaders();
        $token = $headers['X-CSRF-TOKEN'] ?? $headers['X-Csrf-Token'] ?? null;
    }
    
    if (!$token && isset($_SERVER['HTTP_X_CSRF_TOKEN'])) {
        $token = $_SERVER['HTTP_X_CSRF_TOKEN'];
    }
    
    error_log("Session CSRF: " . ($_SESSION['csrf'] ?? 'NOT SET'));
    error_log("Request CSRF: " . ($token ?? 'NOT SET'));
    error_log("Session ID: " . session_id());
    
    if (!$token || empty($_SESSION['csrf']) || !hash_equals($_SESSION['csrf'], $token)) {
        http_response_code(403);
        echo json_encode([
            "error" => "Invalid CSRF",
            "session_has_csrf" => !empty($_SESSION['csrf']),
            "token_provided" => !empty($token),
            "session_id" => session_id()
        ]);
        exit;
    }
}