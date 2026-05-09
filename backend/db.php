<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$conn = new mysqli('localhost', 'root', '', 'zihin_atlasi');
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    die(json_encode(['error' => 'Bağlantı hatası: ' . $conn->connect_error]));
}
?>
