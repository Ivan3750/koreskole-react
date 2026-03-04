<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'no data']);
    exit;
}


if (!isset($data['hold_id'], $data['name'], $data['email'])) {
    http_response_code(400);
    echo json_encode(["error" => "Missing fields"]);
    exit;
}

$hold_id = (int)$data['hold_id'];
$name = trim($data['name']);
$email = trim($data['email']);

// Basic email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid email"]);
    exit;
}

// =====================
// PREPARE EMAIL
// =====================

// CHANGE TO your actual domain email
$to = "kohan3750@gmail.com"; 

$subject = "New Booking Received";

$message = "📩 NEW BOOKING MESSAGE:\n\n";
$message .= "Hold ID: $hold_id\n";
$message .= "Name: " . htmlspecialchars($name) . "\n";
$message .= "Email: " . htmlspecialchars($email) . "\n";
$message .= "Date: " . date("Y-m-d H:i:s") . "\n";

$headers = [];
$headers[] = "From: kohan3750@gmail.com"; // must be valid domain email
$headers[] = "Reply-To: $email";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

// Send email
$mailSent = mail($to, $subject, $message, implode("\r\n", $headers));

if ($mailSent) {
    echo json_encode([
        "success" => true,
        "message" => "Email sent successfully"
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        "error" => "Email failed to send"
    ]);
}
exit;
?>