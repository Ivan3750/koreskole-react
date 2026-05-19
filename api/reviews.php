<?php
require_once 'cors.php';
require_once 'security.php';
require_once 'auth.php';
require_once 'db.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("
        SELECT id, first_name, last_name, review_text, review_date, rating
        FROM reviews
        ORDER BY review_date DESC
    ");

    echo json_encode([
        "reviews" => $stmt->fetchAll(PDO::FETCH_ASSOC)
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

    $rating = (int)($data['rating'] ?? 0);

    if ($rating < 1 || $rating > 5) {
        http_response_code(400);
        echo json_encode(["error" => "Rating must be between 1 and 5"]);
        exit;
    }

    $stmt = $pdo->prepare("
        INSERT INTO reviews (
            first_name,
            last_name,
            review_text,
            review_date,
            rating
        )
        VALUES (?,?,?,?,?)
    ");

    $stmt->execute([
        $data['first_name'],
        $data['last_name'],
        $data['review_text'],
        $data['review_date'],
        $rating
    ]);

    echo json_encode(["success" => true]);
    exit;
}

if ($method === 'DELETE') {
    verify_csrf();

    $id = $_GET['id'] ?? null;

    if (!$id || !ctype_digit((string)$id)) {
        http_response_code(400);
        echo json_encode(["error" => "Invalid ID"]);
        exit;
    }

    $pdo->prepare("DELETE FROM reviews WHERE id = ?")->execute([$id]);

    echo json_encode(["success" => true]);
    exit;
}

http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);