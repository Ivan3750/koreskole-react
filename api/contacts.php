<?php
require_once 'cors.php';
require_once 'security.php';
require_once 'auth.php';
require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT id, email, phone FROM contact_info ORDER BY id ASC");
    echo json_encode(["contacts" => $stmt->fetchAll(PDO::FETCH_ASSOC)]);
    exit;
}

if ($method === 'POST') {
    verify_csrf();

    $data  = json_decode(file_get_contents("php://input"), true);
    $email = trim($data['email'] ?? '');
    $phone = trim($data['phone'] ?? '');

    if (!$email && !$phone) {
        http_response_code(400);
        echo json_encode(["error" => "Email or phone required"]);
        exit;
    }

    if ($email && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid email"]);
        exit;
    }

    $stmt = $pdo->query("SELECT COUNT(*) FROM contact_info");
    if ($stmt->fetchColumn() > 0) {
        $pdo->prepare("UPDATE contact_info SET email=?, phone=? WHERE id=(SELECT id FROM contact_info ORDER BY id ASC LIMIT 1)")
            ->execute([$email, $phone]);
    } else {
        $pdo->prepare("INSERT INTO contact_info (email, phone) VALUES (?,?)")
            ->execute([$email, $phone]);
    }

    echo json_encode(["success" => true]);
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);