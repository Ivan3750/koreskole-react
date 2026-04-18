<?php
// generate_test_user.php
require_once 'db.php';

$username = 'admin1';
$password = 'admin';


$hash = password_hash($password, PASSWORD_BCRYPT);

$stmt = $pdo->prepare("INSERT INTO users (name, password_hash) VALUES (?, ?)");
$stmt->execute([$username,  $hash]);

echo "Користувач створений!\n";
echo "Логін: $username\n";
echo "Пароль: $password\n";
echo "Hash: $hash\n";