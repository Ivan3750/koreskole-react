    <?php

    require_once 'cors.php';

    header("Content-Type: application/json; charset=UTF-8");

    session_set_cookie_params([
        'lifetime' => 0,
        'path' => '/',
        'secure' => false,
        'httponly' => true,
        'samesite' => 'Lax'
    ]);

    session_start();

    /*
    SESSION INIT (only technical, NOT login)
    */
    if (!isset($_SESSION['created'])) {
        $_SESSION['created'] = time();
        $_SESSION['ip'] = $_SERVER['REMOTE_ADDR'];
        $_SESSION['ua'] = $_SERVER['HTTP_USER_AGENT'];
    }

    /*
    SESSION SECURITY
    */
    if ($_SESSION['ip'] !== $_SERVER['REMOTE_ADDR'] ||
        $_SESSION['ua'] !== $_SERVER['HTTP_USER_AGENT']) {

        session_destroy();
        http_response_code(403);
        echo json_encode(["error" => "Session invalid"]);
        exit;
    }

    /*
    CSRF INIT
    */
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
    }

    /*
    CSRF VERIFY
    */
    function verify_csrf() {
        $headers = getallheaders();
        $csrf = $headers['X-CSRF-TOKEN'] ?? '';

        if (!$csrf || !hash_equals($_SESSION['csrf'], $csrf)) {
            http_response_code(403);
            echo json_encode(["error" => "Invalid CSRF"]);
            exit;
        }
    }