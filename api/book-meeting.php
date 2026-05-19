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

$required = ['name', 'email'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        response(["success" => false, "message" => "Missing $field"], 400);
    }
}

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
    response(["success" => false, "message" => "Invalid email"], 400);
}

$name         = trim($data['name']);
$email        = trim($data['email']);
$phone        = trim($data['phone'] ?? '');
$birthday     = trim($data['birthday'] ?? '');

$html = "
<h2>📩 Ny møde-booking</h2>
<table style='border-collapse:collapse;font-family:sans-serif;font-size:15px;'>
  <tr><td style='padding:6px 12px;color:#888;'>Type</td>         <td style='padding:6px 12px;'><b>Gratis møde</b></td></tr>
  <tr><td style='padding:6px 12px;color:#888;'>Navn</td>         <td style='padding:6px 12px;'>{$name}</td></tr>
  <tr><td style='padding:6px 12px;color:#888;'>Email</td>        <td style='padding:6px 12px;'>{$email}</td></tr>
  <tr><td style='padding:6px 12px;color:#888;'>Telefon</td>      <td style='padding:6px 12px;'>{$phone}</td></tr>
  <tr><td style='padding:6px 12px;color:#888;'>Fødselsdag</td>   <td style='padding:6px 12px;'>{$birthday}</td></tr>
  <tr><td style='padding:6px 12px;color:#888;'>Indsendt</td>     <td style='padding:6px 12px;'>" . date('d.m.Y H:i') . "</td></tr>
</table>
";

$mailer = new Mailer($config);
try {
    $ok = $mailer->send(
        'kohan3750@gmail.com',
        'Ny møde-booking',
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