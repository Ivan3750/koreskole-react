<?php

require_once 'cors.php';

/*
SECURITY HEADERS
*/

header("Content-Type: application/json; charset=UTF-8");
header("X-Frame-Options: DENY");
header("X-Content-Type-Options: nosniff");
header("Referrer-Policy: no-referrer");
header("Permissions-Policy: geolocation=(), camera=(), microphone=()");
header("Content-Security-Policy: default-src 'self'; frame-ancestors 'none'; base-uri 'self'");

/*
SESSION HARDENING
*/

ini_set('session.use_strict_mode', 1);
ini_set('session.use_only_cookies', 1);
ini_set('session.cookie_httponly', 1);
ini_set('session.sid_length', 64);
ini_set('session.sid_bits_per_character', 6);

/*
COOKIE SETTINGS
*/

session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'domain' => '',
    'secure' => false, 
    'httponly' => true,
    'samesite' => 'None'
]);

session_start();

/*
SESSION INIT
*/

if (!isset($_SESSION['created'])) {

    $_SESSION['created'] = time();
    $_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];
    $_SESSION['ua'] = $_SERVER['HTTP_USER_AGENT'];

}

/*
TIMEOUTS
*/

$absoluteTimeout = 60 * 60 * 24 * 3;
$idleTimeout = 60 * 30;

if (time() - $_SESSION['created'] > $absoluteTimeout) {

    session_destroy();

    http_response_code(440);
    echo json_encode(["error" => "Session expired"]);
    exit;

}

if (isset($_SESSION['last_activity']) && time() - $_SESSION['last_activity'] > $idleTimeout) {

    session_destroy();

    http_response_code(440);
    echo json_encode(["error" => "Session timeout"]);
    exit;

}

$_SESSION['last_activity'] = time();

/*
SESSION REGENERATION
*/

if (!isset($_SESSION['regen'])) {
    $_SESSION['regen'] = time();
}

if (time() - $_SESSION['regen'] > 300) {

    session_regenerate_id(true);
    $_SESSION['regen'] = time();

}

/*
IP LOCK
*/

if ($_SESSION['ip'] !== $_SERVER['REMOTE_ADDR']) {

    session_destroy();
    http_response_code(403);
    echo json_encode(["error" => "Session invalid"]);
    exit;

}

/*
USER AGENT LOCK
*/

if ($_SESSION['ua'] !== $_SERVER['HTTP_USER_AGENT']) {

    session_destroy();
    http_response_code(403);
    echo json_encode(["error" => "Session invalid"]);
    exit;

}

/*
CSRF FUNCTION
*/

function verify_csrf() {

    $headers = getallheaders();

    $csrf = $headers['X-CSRF-TOKEN'] ?? '';

    if (!$csrf || !isset($_SESSION['csrf']) || !hash_equals($_SESSION['csrf'], $csrf)) {

        http_response_code(403);
        echo json_encode(["error" => "Invalid CSRF"]);
        exit;

    }

}