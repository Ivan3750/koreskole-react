<?php
require_once 'cors.php';
require_once 'security.php';

if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
}

echo json_encode([
    "csrf" => $_SESSION['csrf']
]);