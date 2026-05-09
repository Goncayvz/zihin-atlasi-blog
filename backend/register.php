<?php
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $conn->real_escape_string($data['username'] ?? '');
$email = $conn->real_escape_string($data['email'] ?? '');
$rawPassword = $data['password'] ?? '';

if ($username === '' || $email === '' || $rawPassword === '') {
    echo json_encode(['success' => false, 'message' => 'Kullanıcı adı, email ve şifre zorunludur.']);
    exit();
}

$password = password_hash($rawPassword, PASSWORD_DEFAULT);

$check = $conn->query("SELECT id FROM users WHERE username='$username' OR email='$email'");
if ($check && $check->num_rows > 0) {
    echo json_encode(['success' => false, 'message' => 'Bu kullanıcı adı veya email zaten kullanılıyor.']);
    exit();
}

$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
if ($conn->query($sql)) {
    echo json_encode(['success' => true, 'message' => 'Kayıt başarılı!']);
} else {
    echo json_encode(['success' => false, 'message' => 'Hata: ' . $conn->error]);
}
?>
