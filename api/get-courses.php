<?php
include 'cors.php';
include 'db.php';

header("Access-Control-Allow-Origin: http://localhost:3000");

// Allow methods
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");

// Allow headers
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight (IMPORTANT)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}
$method = $_SERVER['REQUEST_METHOD'];

try {

    // 🔹 GET - fetch all courses
    if ($method === 'GET') {

        $stmt = $pdo->query("SELECT * FROM courses ORDER BY start_datetime ASC");
        $courses = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($courses);
        exit;
    }

    // 🔹 POST - add course
    if ($method === 'POST') {

        $data = json_decode(file_get_contents("php://input"), true);

        $stmt = $pdo->prepare("
            INSERT INTO courses (name, language, start_datetime, rescheduled_datetime, days_of_week)
            VALUES (?, ?, ?, ?, ?)
        ");

        $stmt->execute([
            $data['name'],
            $data['language'],
            $data['start_datetime'],
            $data['rescheduled_datetime'] ?? null,
            $data['days_of_week'] ?? null
        ]);

        echo json_encode(["success" => true]);
        exit;
    }

    // 🔹 DELETE
    if ($method === 'DELETE') {

        $id = $_GET['id'] ?? null;

        if (!$id) {
            echo json_encode(["error" => "Missing ID"]);
            exit;
        }

        $stmt = $pdo->prepare("DELETE FROM courses WHERE id = ?");
        $stmt->execute([$id]);

        echo json_encode(["success" => true]);
        exit;
    }

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}