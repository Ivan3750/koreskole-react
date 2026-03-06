<?php

require 'security.php';

if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {

    http_response_code(401);
    echo json_encode(["error" => "Unauthorized"]);
    exit;

}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {

    verify_csrf();

}