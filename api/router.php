    <?php

    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header("Access-Control-Allow-Origin: http://localhost:3000");
        header("Access-Control-Allow-Credentials: true");
        header("Access-Control-Allow-Headers: Content-Type");
        header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
        http_response_code(200);
        exit;
    }

    $path = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
    $file = __DIR__ . $path;

    if (is_file($file)) {
        return false;
    }

    
    http_response_code(404);
    echo "Not Found";