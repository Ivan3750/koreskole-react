<?php

require_once 'security.php';
require_once 'auth.php';
require_once 'db.php';

header("Content-Type: application/json; charset=UTF-8");

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {

    $stmt = $pdo->query("
        SELECT id, language, course_date, start_time, end_time, days_of_week, session_type, location
        FROM courses
        ORDER BY course_date ASC, start_time ASC
    ");

    echo json_encode([
        "courses" => $stmt->fetchAll(PDO::FETCH_ASSOC)
    ]);

    exit;
}

if ($method === 'POST') {

    verify_csrf();

    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid JSON"]);
        exit;
    }

    $stmt = $pdo->prepare("
        INSERT INTO courses
        (language, course_date, start_time, end_time, days_of_week, session_type, location)
        VALUES (?,?,?,?,?,?,?)
    ");

    $stmt->execute([
        $data['language'],
        $data['course_date'],
        $data['start_time'],
        $data['end_time'],
        $data['days_of_week'],
        $data['session_type'],
        $data['location'] ?? null
    ]);

    echo json_encode(["success" => true]);
    exit;
}

if ($method === 'DELETE') {

    verify_csrf();

    $id = $_GET['id'] ?? null;

    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid ID"]);
        exit;
    }

    $stmt = $pdo->prepare("DELETE FROM courses WHERE id=?");
    $stmt->execute([$id]);

    echo json_encode(["success" => true]);
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);