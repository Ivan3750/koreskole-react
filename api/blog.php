<?php

require_once 'security.php';
require_once 'auth.php';
require_once 'db.php';

header("Content-Type: application/json; charset=UTF-8");

$method = $_SERVER['REQUEST_METHOD'];

/* =========================
   GET ALL BLOGS
========================= */
if ($method === 'GET' && !isset($_GET['id'])) {

    $stmt = $pdo->query("
        SELECT id, title, content, image, created_at, updated_at
        FROM blogs
        ORDER BY created_at DESC
    ");

    echo json_encode([
        "blogs" => $stmt->fetchAll(PDO::FETCH_ASSOC)
    ]);
    exit;
}

/* =========================
   GET SINGLE BLOG
========================= */
if ($method === 'GET' && isset($_GET['id'])) {

    $id = (int) $_GET['id'];
    $stmt = $pdo->prepare("SELECT id, title, content, image, created_at, updated_at FROM blogs WHERE id = ?");
    $stmt->execute([$id]);
    $blog = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$blog) {
        http_response_code(404);
        echo json_encode(["error" => "Blog not found"]);
        exit;
    }

    echo json_encode($blog);
    exit;
}

/* =========================
   CREATE BLOG
   Supports:
     - JSON body  { title, content, image? }
     - multipart/form-data with optional file upload (field: image)
========================= */
if ($method === 'POST' && !isset($_GET['id'])) {

    verify_csrf();

    $title   = null;
    $content = null;
    $image   = null;

    $ct = $_SERVER['CONTENT_TYPE'] ?? '';

    if (str_contains($ct, 'multipart/form-data')) {
        // ── multipart: supports file upload ──────────────────────────────────
        $title   = $_POST['title']   ?? null;
        $content = $_POST['content'] ?? null;
        $image   = $_POST['image']   ?? null; // existing URL passed back

        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $image = handle_upload($_FILES['image']);
            if ($image === false) {
                http_response_code(422);
                echo json_encode(["error" => "Image upload failed or invalid file type"]);
                exit;
            }
        }
    } else {
        // ── JSON body ─────────────────────────────────────────────────────────
        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid JSON"]);
            exit;
        }

        $title   = $data['title']   ?? null;
        $content = $data['content'] ?? null;
        $image   = $data['image']   ?? null;
    }

    if (!$title || !$content) {
        http_response_code(400);
        echo json_encode(["error" => "Title and content are required"]);
        exit;
    }

    $stmt = $pdo->prepare("INSERT INTO blogs (title, content, image) VALUES (?, ?, ?)");
    $stmt->execute([$title, $content, $image]);

    echo json_encode(["success" => true, "id" => (int) $pdo->lastInsertId()]);
    exit;
}

/* =========================
   UPDATE BLOG
   Same dual-format support as CREATE
========================= */
if ($method === 'POST' && isset($_GET['id'])) {

    verify_csrf();

    $id = (int) $_GET['id'];

    // Confirm blog exists
    $check = $pdo->prepare("SELECT id, image FROM blogs WHERE id = ?");
    $check->execute([$id]);
    $existing = $check->fetch(PDO::FETCH_ASSOC);

    if (!$existing) {
        http_response_code(404);
        echo json_encode(["error" => "Blog not found"]);
        exit;
    }

    $title   = null;
    $content = null;
    $image   = $existing['image']; // keep old image unless replaced

    $ct = $_SERVER['CONTENT_TYPE'] ?? '';

    if (str_contains($ct, 'multipart/form-data')) {
        $title   = $_POST['title']   ?? null;
        $content = $_POST['content'] ?? null;

        // If client sends explicit image URL (even empty string to clear it)
        if (isset($_POST['image'])) {
            $image = $_POST['image'] ?: null;
        }

        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $uploaded = handle_upload($_FILES['image']);
            if ($uploaded === false) {
                http_response_code(422);
                echo json_encode(["error" => "Image upload failed or invalid file type"]);
                exit;
            }
            // Delete old image file if it was a local upload
            delete_old_image($existing['image']);
            $image = $uploaded;
        }
    } else {
        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data) {
            http_response_code(400);
            echo json_encode(["error" => "Invalid JSON"]);
            exit;
        }

        $title   = $data['title']   ?? null;
        $content = $data['content'] ?? null;

        if (array_key_exists('image', $data)) {
            $image = $data['image'] ?: null;
        }
    }

    if (!$title || !$content) {
        http_response_code(400);
        echo json_encode(["error" => "Title and content are required"]);
        exit;
    }

    $stmt = $pdo->prepare("UPDATE blogs SET title = ?, content = ?, image = ?, updated_at = NOW() WHERE id = ?");
    $stmt->execute([$title, $content, $image, $id]);

    echo json_encode(["success" => true]);
    exit;
}

/* =========================
   DELETE BLOG
========================= */
if ($method === 'DELETE') {

    verify_csrf();

    $id = isset($_GET['id']) ? (int) $_GET['id'] : null;

    if (!$id) {
        http_response_code(400);
        echo json_encode(["error" => "Missing id"]);
        exit;
    }

    // Clean up image file if local
    $check = $pdo->prepare("SELECT image FROM blogs WHERE id = ?");
    $check->execute([$id]);
    $row = $check->fetch(PDO::FETCH_ASSOC);
    if ($row) {
        delete_old_image($row['image']);
    }

    $stmt = $pdo->prepare("DELETE FROM blogs WHERE id = ?");
    $stmt->execute([$id]);

    echo json_encode(["success" => true]);
    exit;
}

/* =========================
   METHOD NOT ALLOWED
========================= */
http_response_code(405);
echo json_encode(["error" => "Method not allowed"]);


/* =========================
   HELPERS
========================= */

/**
 * Validates and moves an uploaded image to /uploads/.
 * Returns the public URL on success, false on failure.
 */
function handle_upload(array $file): string|false
{
    $allowed_mime = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    $allowed_ext  = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    $max_size     = 5 * 1024 * 1024; // 5 MB

    if ($file['size'] > $max_size) return false;

    // Validate MIME via fileinfo (not just extension)
    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime  = $finfo->file($file['tmp_name']);
    if (!in_array($mime, $allowed_mime, true)) return false;

    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, $allowed_ext, true)) return false;

    $upload_dir = __DIR__ . '/uploads/';
    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0755, true);
    }

    $filename  = bin2hex(random_bytes(16)) . '.' . $ext;
    $dest      = $upload_dir . $filename;

    if (!move_uploaded_file($file['tmp_name'], $dest)) return false;

    // Return a root-relative public URL — adjust if your app lives in a subpath
    return '/uploads/' . $filename;
}

/**
 * Deletes an image file that was uploaded locally (starts with /uploads/).
 * Ignores external URLs.
 */
function delete_old_image(?string $image_path): void
{
    if (!$image_path) return;
    if (!str_starts_with($image_path, '/uploads/')) return;

    $full_path = __DIR__ . $image_path;
    if (is_file($full_path)) {
        unlink($full_path);
    }
}