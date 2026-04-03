<?php
require_once 'cors.php';
require_once 'security.php';
require_once 'auth.php';
require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    verify_csrf();

    $data        = json_decode(file_get_contents("php://input"), true);
    $oldPassword = $data['old_password'] ?? '';
    $newPassword = $data['new_password'] ?? '';

    if (!$oldPassword || !$newPassword) {
        http_response_code(400);
        echo json_encode(["error" => "Both fields required"]);
        exit;
    }

    if (strlen($newPassword) < 8) {
        http_response_code(400);
        echo json_encode(["error" => "New password must be at least 8 characters"]);
        exit;
    }

    $userId = $_SESSION['user_id'];

    $stmt = $pdo->prepare("SELECT password_hash FROM users WHERE id = ?");
    $stmt->execute([$userId]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($oldPassword, $user['password_hash'])) {
        http_response_code(401);
        echo json_encode(["error" => "Current password is incorrect"]);
        exit;
    }

    $newHash = password_hash($newPassword, PASSWORD_BCRYPT);
    $pdo->prepare("UPDATE users SET password_hash=? WHERE id=?")
        ->execute([$newHash, $userId]);

    echo json_encode(["success" => true]);
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);