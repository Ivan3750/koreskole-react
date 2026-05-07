<?php

require __DIR__ . '/../vendor/autoload.php';
require __DIR__ . '/mail/Mailer.php';

$config = require __DIR__ . '/mail/config.php';

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: https://xn--lnbks-ura7j.dk");

function response($data, int $code = 200): void
{
    http_response_code($code);
    echo json_encode($data);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    response(["success" => false, "message" => "Invalid JSON"], 400);
}

$required = ['hold_id', 'name', 'email'];

foreach ($required as $field) {
    if (empty($data[$field])) {
        response(["success" => false, "message" => "Missing $field"], 400);
    }
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    response(["success" => false, "message" => "Invalid email"], 400);
}

$hold_id  = (int)$data['hold_id'];
$name     = trim($data['name']);
$email    = trim($data['email']);
$phone    = trim($data['phone'] ?? '');
$birthday = trim($data['birthday'] ?? '');

$html = "
<h2>📩 Ny booking</h2>
<p><b>Hold ID:</b> {$hold_id}</p>
<p><b>Navn:</b> {$name}</p>
<p><b>Email:</b> {$email}</p>
<p><b>Telefon:</b> {$phone}</p>
<p><b>Fødselsdag:</b> {$birthday}</p>
<p><b>Dato:</b> " . date('Y-m-d H:i:s') . "</p>
";

$mailer = new Mailer($config);

try {
    $ok = $mailer->send(
        'kohan3750@gmail.com',
        'Ny booking',
        $html,
        $email,
        $name
    );

    response([
        "success" => $ok,
        "message" => $ok ? "Email sent" : "Failed"
    ]);

} catch (Throwable $e) {
    response([
        "success" => false,
        "message" => "SMTP error"
    ], 500);
}