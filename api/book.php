<?php

header("Access-Control-Allow-Origin: https://xn--lnbks-ura7j.dk");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$logFile = 'booking_log.txt';
file_put_contents($logFile, date('Y-m-d H:i:s') . " - Request received\n", FILE_APPEND);

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    file_put_contents($logFile, "No data received\n\n", FILE_APPEND);
    echo json_encode(['success' => false, 'message' => 'no data']);
    exit;
}

file_put_contents($logFile, print_r($data, true) . "\n", FILE_APPEND);

if (!isset($data['hold_id'], $data['name'], $data['email'])) {
    file_put_contents($logFile, "Missing required fields\n\n", FILE_APPEND);
    http_response_code(400);
    echo json_encode(["error" => "Missing fields"]);
    exit;
}

$hold_id  = (int)$data['hold_id'];
$name     = trim($data['name']);
$email    = trim($data['email']);
$phone    = trim($data['phone'] ?? '');
$birthday = trim($data['birthday'] ?? '');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    file_put_contents($logFile, "Invalid email format\n\n", FILE_APPEND);
    http_response_code(400);
    echo json_encode(["error" => "Invalid email"]);
    exit;
}

$to        = "kohan3750@gmail.com";
$from_name = "Lønbæks";
$from_email = "kohan3750@gmail.com";

$subject = "Ny booking modtaget";

$email_message = "
<html><body style='font-family: Arial, sans-serif;'>
<h2>📩 Ny booking</h2>
<table>
  <tr><td><b>Hold ID:</b></td><td>{$hold_id}</td></tr>
  <tr><td><b>Navn:</b></td><td>" . htmlspecialchars($name) . "</td></tr>
  <tr><td><b>Email:</b></td><td>" . htmlspecialchars($email) . "</td></tr>
  <tr><td><b>Telefon:</b></td><td>" . htmlspecialchars($phone) . "</td></tr>
  <tr><td><b>Fødselsdag:</b></td><td>" . htmlspecialchars($birthday) . "</td></tr>
  <tr><td><b>Dato:</b></td><td>" . date("Y-m-d H:i:s") . "</td></tr>
</table>
</body></html>
";

$headers  = "From: {$from_name} <{$from_email}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Return-Path: {$from_email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$mailSent = mail($to, $subject, $email_message, $headers);

if ($mailSent) {
    file_put_contents($logFile, "Email sent successfully\n\n", FILE_APPEND);
    echo json_encode([
        "success" => true,
        "message" => "Email sent successfully"
    ]);
} else {
    file_put_contents($logFile, "Email failed to send\n\n", FILE_APPEND);
    http_response_code(500);
    echo json_encode([
        "error" => "Email failed to send"
    ]);
}
exit;
?>