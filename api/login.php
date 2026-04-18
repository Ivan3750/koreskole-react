<?php
require_once 'cors.php';
require_once 'security.php';
require_once 'db.php';

$data     = json_decode(file_get_contents('php://input'), true);
$username = trim($data['name'] ?? '');
$password = $data['password'] ?? '';

if (!$username || !$password) {
    http_response_code(400);
    echo json_encode(["error" => $username, $password]);
    exit;
}
/* if (!$username || !$password) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid credentials"]);
    exit;
} */

$ip = $_SERVER['REMOTE_ADDR'];

$pdo->prepare("DELETE FROM login_attempts WHERE attempt_time < ?")->execute([time() - 900]);

$stmt = $pdo->prepare("SELECT COUNT(*) FROM login_attempts WHERE ip = ?");
$stmt->execute([$ip]);
if ($stmt->fetchColumn() >= 10) {
    http_response_code(429);
    echo json_encode(["error" => "Too many attempts"]);
    exit;
}

$pdo->prepare("INSERT INTO login_attempts (ip, attempt_time) VALUES (?, ?)")->execute([$ip, time()]);

$stmt = $pdo->prepare("SELECT id, name, password_hash, failed_attempts, locked_until FROM users WHERE name = ? LIMIT 1");
$stmt->execute([$username]);
$user = $stmt->fetch();

if (!$user) {
    password_verify($password, '$2y$10$usesomesillystringforsalt$');
    http_response_code(401);
    echo json_encode(["error" => "Invalid credentials"]);
    exit;
}

if ($user['locked_until'] && $user['locked_until'] > time()) {
    http_response_code(403);
    echo json_encode(["error" => "Account locked"]);
    exit;
}

if (!password_verify($password, $user['password_hash'])) {
    $failed = $user['failed_attempts'] + 1;
    $lock   = null;
    if ($failed >= 5) {
        $lock   = time() + 900;
        $failed = 0;
    }
    $pdo->prepare("UPDATE users SET failed_attempts=?, locked_until=? WHERE id=?")->execute([$failed, $lock, $user['id']]);
    http_response_code(401);
    echo json_encode(["error" => "Invalid credentials"]);
    exit;
}

$pdo->prepare("UPDATE users SET failed_attempts=0, locked_until=NULL WHERE id=?")->execute([$user['id']]);

session_regenerate_id(true);

$_SESSION['logged_in'] = true;
$_SESSION['user_id']   = $user['id'];
$_SESSION['username']  = $user['name'];
$_SESSION['created']   = time();
$_SESSION['ip']        = $_SERVER['REMOTE_ADDR'];
$_SESSION['ua']        = $_SERVER['HTTP_USER_AGENT'];
$_SESSION['csrf']      = bin2hex(random_bytes(32));

echo json_encode(["success" => true, "csrf" => $_SESSION['csrf']]);