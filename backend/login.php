<?php
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $conn->real_escape_string($data['username'] ?? '');
$password = $data['password'] ?? '';

if ($username === '' || $password === '') {
    echo json_encode(['success' => false, 'message' => 'Kullanıcı adı ve şifre zorunludur.']);
    exit();
}

$result = $conn->query("SELECT * FROM users WHERE username='$username' OR email='$username'");
if (!$result || $result->num_rows === 0) {
    echo json_encode(['success' => false, 'message' => 'Kullanıcı bulunamadı.']);
    exit();
}

$user = $result->fetch_assoc();

if (password_verify($password, $user['password'])) {
    echo json_encode([
        'success' => true,
        'message' => 'Giriş başarılı!',
        'user' => [
            'id' => $user['id'],
            'username' => $user['username'],
            'email' => $user['email'],
        ],
    ]);
} else {
    echo json_encode(['success' => false, 'message' => 'Şifre yanlış.']);
}
?>
