<?php
header("Content-Type: application/json");
header("X-Frame-Options: DENY");
header("X-Content-Type-Options: nosniff");
header("Referrer-Policy: no-referrer");
header("Content-Security-Policy: default-src 'self'");
header("Strict-Transport-Security: max-age=31536000; includeSubDomains; preload");

session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'domain' => '',
    'secure' => true,
    'httponly' => true,
    'samesite' => 'Strict'
]);

session_start();

$absoluteTimeout = 60 * 60 * 24 * 3;
$idleTimeout = 60 * 30;

if (isset($_SESSION['created']) && time() - $_SESSION['created'] > $absoluteTimeout) {
    session_destroy();
    exit;
}

if (isset($_SESSION['last_activity']) && time() - $_SESSION['last_activity'] > $idleTimeout) {
    session_destroy();
    exit;
}

$_SESSION['last_activity'] = time();

if (isset($_SESSION['ip']) && $_SESSION['ip'] !== $_SERVER['REMOTE_ADDR']) {
    session_destroy();
    exit;
}

if (isset($_SESSION['ua']) && $_SESSION['ua'] !== $_SERVER['HTTP_USER_AGENT']) {
    session_destroy();
    exit;
}   