<?php

error_reporting(E_ALL);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/debug.log');

function debug_log($msg) {
    file_put_contents(__DIR__ . '/debug.log', date('H:i:s') . " " . $msg . "\n", FILE_APPEND);
}

$allowedOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

debug_log("---- NEW REQUEST ----");
debug_log("Origin: $origin");
debug_log("Method: " . $_SERVER['REQUEST_METHOD']);

if (in_array($origin, $allowedOrigins)) {

    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Content-Type, X-CSRF-TOKEN");
    header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
}

/*
🔥 ONLY ONE PLACE FOR OPTIONS
*/
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {

    debug_log("OPTIONS HIT");

    http_response_code(200);
    exit;
}