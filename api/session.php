<?php

require 'security.php';

if (!isset($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
}

echo json_encode([
    "csrf" => $_SESSION['csrf']
]);