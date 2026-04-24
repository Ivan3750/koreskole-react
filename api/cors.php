<?php

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (
    preg_match('/(lønbæks\.dk|xn--lnbks-ura7j\.dk)$/', $origin)
) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Content-Type, X-CSRF-TOKEN");
    header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}