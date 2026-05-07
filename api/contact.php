<?php

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/mail/Mailer.php';

$config = require __DIR__ . '/mail/config.php';

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "No data"]);
    exit;
}

$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Missing fields"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid email"]);
    exit;
}

$html = "
<h2>📩 Ny kontakt besked</h2>

<p><b>Navn:</b> " . htmlspecialchars($name) . "</p>
<p><b>Email:</b> " . htmlspecialchars($email) . "</p>

<hr>

<p>" . nl2br(htmlspecialchars($message)) . "</p>
";

$mailer = new Mailer($config);

try {

    $mailer->send(
        'kohan3750@gmail.com',
        'Ny kontakt besked',
        $html,
        $email,
        $name
    );

    echo json_encode([
        "success" => true,
        "message" => "Message sent"
    ]);

} catch (Throwable $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => $e->getMessage()
    ]);
}