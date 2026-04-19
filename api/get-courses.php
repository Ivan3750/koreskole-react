<?php
require_once 'cors.php';
require_once 'security.php';
require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("
        SELECT id, language, course_date, start_time, end_time, days_of_week, session_type
        FROM courses
        ORDER BY course_date ASC, start_time ASC
    ");
    echo json_encode(["courses" => $stmt->fetchAll(PDO::FETCH_ASSOC)]);
    exit;
}