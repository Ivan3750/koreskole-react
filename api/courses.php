<?php

require 'cors.php';
require 'db.php';
require 'security.php';

header("Content-Type: application/json; charset=UTF-8");

if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    http_response_code(401);
    echo json_encode(["error" => "Unauthorized"]);
    exit;
}

if ($_SESSION['ip'] !== $_SERVER['REMOTE_ADDR']) {
    http_response_code(403);
    echo json_encode(["error" => "Session invalid"]);
    exit;
}

if ($_SESSION['ua'] !== $_SERVER['HTTP_USER_AGENT']) {
    http_response_code(403);
    echo json_encode(["error" => "Session invalid"]);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

/*
RATE LIMIT
*/

$ip = $_SERVER['REMOTE_ADDR'];

$pdo->prepare("DELETE FROM api_limits WHERE time < ?")
    ->execute([time() - 60]);

$stmt = $pdo->prepare("SELECT COUNT(*) FROM api_limits WHERE ip=?");
$stmt->execute([$ip]);

if ($stmt->fetchColumn() > 120) {
    http_response_code(429);
    echo json_encode(["error" => "Too many requests"]);
    exit;
}

$pdo->prepare("INSERT INTO api_limits (ip,time) VALUES (?,?)")
    ->execute([$ip,time()]);


/*
GET COURSES
*/

if ($method === 'GET') {

    $stmt = $pdo->query("
        SELECT 
        id,
        language,
        course_date,
        start_time,
        end_time,
        days_of_week,
        session_type,
        location
        FROM courses
        ORDER BY course_date ASC, start_time ASC
    ");

    echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
    exit;
}


/*
CREATE COURSE
*/

if ($method === 'POST') {

    verify_csrf();

    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data) {
        http_response_code(400);
        echo json_encode(["error"=>"Invalid JSON"]);
        exit;
    }

    $language = $data['language'] ?? '';
    $date = $data['course_date'] ?? null;
    $start = $data['start_time'] ?? null;
    $end = $data['end_time'] ?? null;
    $days = $data['days_of_week'] ?? null;
    $session = $data['session_type'] ?? null;
    $location = $data['location'] ?? null;

    if (!in_array($language, ['en','da'])) {
        http_response_code(400);
        echo json_encode(["error"=>"Invalid language"]);
        exit;
    }

    $stmt = $pdo->prepare("
        INSERT INTO courses
        (language, course_date, start_time, end_time, days_of_week, session_type, location)
        VALUES (?,?,?,?,?,?,?)
    ");

    $stmt->execute([
        $language,
        $date,
        $start,
        $end,
        $days,
        $session,
        $location
    ]);

    echo json_encode([
        "success"=>true,
        "id"=>$pdo->lastInsertId()
    ]);
    exit;
}


/*
UPDATE COURSE
*/

if ($method === 'PUT') {

    verify_csrf();

    $data = json_decode(file_get_contents("php://input"), true);

    if (!$data || !isset($data['id'])) {
        http_response_code(400);
        echo json_encode(["error"=>"Invalid data"]);
        exit;
    }

    $id = (int)$data['id'];

    $language = $data['language'] ?? '';
    $date = $data['course_date'] ?? null;
    $start = $data['start_time'] ?? null;
    $end = $data['end_time'] ?? null;
    $days = $data['days_of_week'] ?? null;
    $session = $data['session_type'] ?? null;
    $location = $data['location'] ?? null;

    if (!in_array($language, ['en','da'])) {
        http_response_code(400);
        echo json_encode(["error"=>"Invalid language"]);
        exit;
    }

    $stmt = $pdo->prepare("
        UPDATE courses
        SET
        language=?,
        course_date=?,
        start_time=?,
        end_time=?,
        days_of_week=?,
        session_type=?,
        location=?
        WHERE id=?
    ");

    $stmt->execute([
        $language,
        $date,
        $start,
        $end,
        $days,
        $session,
        $location,
        $id
    ]);

    echo json_encode(["success"=>true]);
    exit;
}


/*
DELETE COURSE
*/

if ($method === 'DELETE') {

    verify_csrf();

    $id = $_GET['id'] ?? null;

    if (!$id || !filter_var($id,FILTER_VALIDATE_INT)) {
        http_response_code(400);
        echo json_encode(["error"=>"Invalid ID"]);
        exit;
    }

    $stmt = $pdo->prepare("DELETE FROM courses WHERE id=?");
    $stmt->execute([$id]);

    echo json_encode(["success"=>true]);
    exit;
}


http_response_code(405);
echo json_encode(["error"=>"Method not allowed"]);