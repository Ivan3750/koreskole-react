<?php
require 'cors.php';
require 'db.php';
require 'security.php';

if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    http_response_code(401);
    echo json_encode(["error" => "Unauthorized"]);
    exit;
}

$csrfHeader = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!$csrfHeader || $csrfHeader !== ($_SESSION['csrf'] ?? '')) {
        http_response_code(403);
        echo json_encode(["error" => "Invalid CSRF"]);
        exit;
    }
}